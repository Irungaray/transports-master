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

// Internal modules
import { useStyles } from "./styles";
import Input from "../../atoms/Input/Input";

const EditShipperForm = (props) => {
    const [values, setValues] = useState({
        cuit: props.cuit || "",
        name: props.name || "",
        contact: props.contact || "",
        phone: props.phone || "",
        ctrrem: props.ctrrem || false,
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

    const handleEditShipper = () => {
        console.log('editado');
    }

    console.log(values);

    return (
        <Box className={box}>
            <Input
                name="cuit"
                label="Código (CUIT)"
                value={values.cuit}
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
                        checked={values.ctrrem}
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
