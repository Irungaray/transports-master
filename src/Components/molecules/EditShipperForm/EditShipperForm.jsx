// External modules
import { useState } from "react";
import PropTypes from "prop-types";

// External components
import {
    Box,
    Typography,
    FormControlLabel,
    Switch,
    Button,
} from "@material-ui/core";

// Internal components
import Input from "../../atoms/Input/Input";

// Internal modules
import { useStyles } from "./styles";
import { editShipper } from "../../../helpers/requests";

const EditShipperForm = (props) => {
    const [values, setValues] = useState({
        code: props.codigo,
        name: props.nombre,
        contact: props.contacto,
        phone: props.telefono,
        ctrm: props.contrareembolso,
    });
    const [err, setErr] = useState(false);

    const { box, error, primaryColor } = useStyles();

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };

    const handleCheck = () => {
        setValues({
            ...values,
            rememberMe: !values.rememberMe,
        });
    };

    const handleEditShipper = async () => {
        const { code, name, contact, phone, ctrm } = values;
        const { id, token } = props;
        const res = await editShipper(
            {
                "id": id,
                "codigo": code,
                "nombre": name,
                "contacto": contact,
                "telefono": phone,
                "contrareembolso": ctrm,
                "calificacion": "X",
                "activo": true,
                "horarios": [
                    {
                        "codPostal": "5800",
                        "lunes": "9:0",
                        "martes": "",
                        "miercoles": "",
                        "jueves": "10:0",
                        "viernes": "",
                        "sabado": "",
                        "entrega": 8
                    },
                    {
                        "codPostal": "5801",
                        "lunes": "10:0",
                        "martes": "10:0",
                        "miercoles": "",
                        "jueves": "10:0",
                        "viernes": "10:0",
                        "sabado": "9:0",
                        "entrega": 8
                    }
                ]
            },
            token

        )

        if (res.status === 200) {
            console.log('transportista editado');
        } else {
            setErr(true);
        }
    }

    console.log("valores:", values);

    return (
        <Box className={box}>
            <Input
                name="cuit"
                label="Código (CUIT)"
                value={values.code}
                onChange={handleChange}
            />

            <Input
                name="name"
                label="Nombre"
                value={values.name}
                onChange={handleChange}
            />

            <Input
                name="contact"
                label="Contacto"
                value={values.contact}
                onChange={handleChange}
            />

            <Input
                name="phone"
                label="Teléfono"
                value={values.phone}
                onChange={handleChange}
            />

            <FormControlLabel
                // className={rmmbr}
                control={
                    <Switch
                        checked={values.ctrm}
                        onChange={handleCheck}
                        name="ctrrem"
                        color="primary"
                    />
                }
                label="Contrareembolso"
            />

            {err && (
                <Typography variant="body2" color="error" className={error}>
                    Error al editar transportista.
                </Typography>
            )}

            <Button
                onClick={handleEditShipper}
                className={primaryColor}
            >
                <Typography variant="body1">
                    Editar transportista
                </Typography>
            </Button>
        </Box>
    );
};

EditShipperForm.propTypes = {};

export default EditShipperForm;
