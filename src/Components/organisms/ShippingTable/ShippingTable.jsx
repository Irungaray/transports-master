// External modules
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

// External components
import {
    Table,
    TableBody,
    TableHead,
    TableCell,
    TableContainer,
    TableRow,
    Paper,
    Typography,
} from "@material-ui/core";

// Internal modules
import { useStyles } from "./styles";
import { getShippers, getShipperById } from "../../../helpers/requests";

// Internal components
import PaperWithTitle from "../../containers/PaperWithTitle/PaperWithTitle";
import Cell from "../../atoms/Cell/Cell";
import Modal from "../../molecules/Modal/Modal";
import EditShipperForm from "../../molecules/EditShipperForm/EditShipperForm";

const ShippingTable = (props) => {
    const [shippers, setShippers] = useState([]);
    const [selectedShipper, setSelectedShipper] = useState({})
    const [openModal, setOpenModal] = useState(false);

    const { row, cell, dataRow } = useStyles();

    const tags = [
        "Código", "Nombre", "Contacto", "Teléfono", "C/Reembolso", "Calificación", "Activo",
    ];

    const getData = async () => {
        const res = await getShippers(props.token)

        if (res.status === 200) {
            setShippers(res.data)
        } else {
            alert("Error al obtener los datos, por favor recargue la página.")
        }
    }

    useEffect(() => {
        getData()
    }, [])

    // console.log(shippers);

    const handleShipper = async (id) => {
        const res = await getShipperById(id, props.token)

        if (res.status === 200) {
            setSelectedShipper(res.data)
            // console.log('selected shipper:', selectedShipper);
            setOpenModal(true);
        } else {
            console.log('error');
        }
    }

    const handleCloseModal = () => {
        setOpenModal(false);
        setSelectedShipper({});
        getData()
    }

    return (
        <PaperWithTitle title="Transportes">
            <TableContainer component={Paper} elevation={5}>
                <Table aria-label="custom pagination table">
                    <TableHead>
                        <TableRow className={row}>
                            {tags.map((tag, index) => (
                                <TableCell key={index}>
                                    <Typography
                                        variant="body1"
                                        className={cell}
                                    >
                                        {tag}
                                    </Typography>
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {shippers.map((shipper, index) => (
                            <TableRow key={index} onClick={() => handleShipper(shipper.id)} className={dataRow}>
                                <Cell text={shipper.codigo} />
                                <Cell text={shipper.contacto} />
                                <Cell text={shipper.nombre} />
                                <Cell text={shipper.telefono} />
                                <Cell text={shipper.contrareembolso} />
                                <Cell text={shipper.calificacion} />
                                <Cell text={shipper.activo} />
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {openModal && (
                <Modal
                    title={`Modificar Transportista ${selectedShipper.nombre}`}
                    component={
                        <EditShipperForm
                            token={props.token}
                            id={selectedShipper.id}
                            codigo={selectedShipper.codigo}
                            nombre={selectedShipper.nombre}
                            contacto={selectedShipper.contacto}
                            telefono={selectedShipper.telefono}
                            contrareembolso={selectedShipper.contrareembolso}
                            handleCloseModal={handleCloseModal}
                        />
                    }
                    open={openModal}
                    cancelButtonText="Cancelar"
                    confirmButtonText="Guardar"
                    handleCancelButton={handleCloseModal}
                />
            )}
        </PaperWithTitle>
    );
};

ShippingTable.propTypes = {
    token: PropTypes.string,
};

export default ShippingTable;
