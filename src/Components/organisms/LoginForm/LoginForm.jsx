// External modules
import { useState } from "react";
import PropTypes from "prop-types";

// External components
import { Button, Typography } from "@material-ui/core";

// Internal modules
import { useStyles } from "./styles";
import { login } from "../../../helpers/requests";

// Internal components
import PaperWithTitle from "../../containers/PaperWithTitle/PaperWithTitle";
import Input from "../../atoms/Input/Input";
import PswInput from "../../atoms/PswInput/PswInput";
import SwitchInput from "../../atoms/SwitchInput/SwitchInput";

const LoginForm = (props) => {
    const [values, setValues] = useState({
        username: "desa" || "",
        password: "test" || "",
        rememberMe: true,
    });
    const [err, setErr] = useState(false);

    const { error } = useStyles();

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

    const handleSubmit = async (e) => {
        e.preventDefault();

        // const res = {status: 200}
        const res = await login(
            values.username,
            values.password,
            values.rememberMe
        );

        if (res.status === 200) {
            props.setToken(res.data.id_token);
            setErr(false);
        } else {
            setErr(true);
        }
    };

    return (
        <PaperWithTitle isForm onSubmit={handleSubmit} title="Ingresar">
            <Input
                label="Nombre de usuario"
                name="username"
                value={values.username}
                onChange={handleChange}
            />

            <PswInput
                label="Contraseña"
                name="password"
                value={values.password}
                onChange={handleChange}
            />

            <SwitchInput
                checked={values.rememberMe}
                onChange={handleCheck}
                name="rememberMe"
                label="Recuérdame"
            />

            <Button variant="contained" color="primary" type="submit">
                Ingresar
            </Button>

            {err && (
                <Typography variant="body2" color="error" className={error}>
                    Error al iniciar sesión.
                </Typography>
            )}
        </PaperWithTitle>
    );
};

LoginForm.propTypes = {
    setToken: PropTypes.func,
};

export default LoginForm;
