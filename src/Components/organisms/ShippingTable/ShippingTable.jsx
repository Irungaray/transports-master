// External modules
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

// External components
import {
    Table,
    TableHead,
    TableBody,
    TableFooter,
    TablePagination,
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
import TablePaginationActions from "../../molecules/TablePaginationActions/TablePaginationActions";
import Input from "../../atoms/Input/Input";

const ShippingTable = (props) => {
    const [searchValue, setSearchValue] = useState("");
    const [shippers, setShippers] = useState([]);
    const [selectedShipper, setSelectedShipper] = useState({});
    const [openModal, setOpenModal] = useState(false);

    const { row, cell, dataRow } = useStyles();

    const getData = async () => {
        const res = await getShippers(props.token);

        if (res.status === 200) {
            setShippers(res.data);
        } else {
            alert("Error al obtener los datos, por favor recargue la página.");
        }
    };

    useEffect(() => {
        getData();
    }, []);

    const handleShipper = async (id) => {
        const res = await getShipperById(id, props.token);

        if (res.status === 200) {
            setSelectedShipper(res.data);
            setOpenModal(true);
        } else {
            alert("Error al obtener el transportista seleccionado.");
        }
    };

    const handleCloseModal = () => {
        setOpenModal(false);
        setSelectedShipper({});
        getData();
    };

    const filteredShippers = shippers.filter((shipper) => (
        shipper.contacto.toLowerCase().includes(searchValue.toLowerCase())
    ))

    const shippersToMap = searchValue.length > 1 ? filteredShippers : shippers;

    // TABLE PAGINATION [
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const emptyRows =
        rowsPerPage -
        Math.min(rowsPerPage, shippers.length - page * rowsPerPage);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    // ]

    const tags = [
        "Código",
        "Nombre",
        "Contacto",
        "Teléfono",
        "C/Reembolso",
        "Calificación",
        "Activo",
    ];

    return (
        <PaperWithTitle title="Transportes">
            <Input
                name="search"
                label="Buscar transportista..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
            />

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
                        {(rowsPerPage > 0
                            ? shippersToMap.slice(
                                  page * rowsPerPage,
                                  page * rowsPerPage + rowsPerPage
                              )
                            : shippersToMap
                        ).map((shipper, index) => (
                            <TableRow
                                key={index}
                                onClick={() => handleShipper(shipper.id)}
                                className={dataRow}
                            >
                                <Cell text={shipper.codigo} />
                                <Cell text={shipper.contacto} />
                                <Cell text={shipper.nombre} />
                                <Cell text={shipper.telefono} />
                                <Cell text={shipper.contrareembolso} />
                                <Cell text={shipper.calificacion} />
                                <Cell text={shipper.activo} />
                            </TableRow>
                        ))}

                        {emptyRows > 0 && (
                            <TableRow style={{ height: 53 * emptyRows }}>
                                <TableCell colSpan={6} />
                            </TableRow>
                        )}
                    </TableBody>

                    <TableFooter>
                        <TableRow>
                            <TablePagination
                                rowsPerPageOptions={[
                                    5,
                                    10,
                                    25,
                                    { label: "Todas", value: -1 },
                                ]}
                                colSpan={5}
                                count={shippers.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                SelectProps={{
                                    inputProps: {
                                        "aria-label": "rows per page",
                                    },
                                    native: true,
                                }}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                                ActionsComponent={TablePaginationActions}
                            />
                        </TableRow>
                    </TableFooter>
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
