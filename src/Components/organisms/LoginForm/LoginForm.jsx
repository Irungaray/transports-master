// External modules
import { useState } from "react";

// External components
import {
    InputLabel,
    OutlinedInput,
    InputAdornment,
    IconButton,
    FormControl,
    FormControlLabel,
    Switch,
    Button,
    Typography,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";

// Internal modules
import { useStyles } from "./styles";
import { login } from "../../../helpers/requests";

// Internal components
import PaperWithTitle from "../../containers/PaperWithTitle/PaperWithTitle";

const LoginForm = () => {
    const [values, setValues] = useState({
        username: "desa" || "",
        password: "test" || "",
        rememberMe: true,
    });
    const [showPassword, setShowPassword] = useState(false);
    const [err, setErr] = useState(false);

    const { textField, rmmbr, error } = useStyles();

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };

    const handleCheck = () => {
        setValues({
            ...values,
            rememberMe: !values.rememberMe
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // const res = {status: 200}
        const res = await login(values.username, values.password, values.rememberMe);
        console.log(res.data.id_token);

        if (res.status === 200) {
            alert('Logeado')
            setErr(false)
        } else {
            setErr(true)
        }
    };

    return (
        <PaperWithTitle isForm onSubmit={handleSubmit} title="Ingresar">
            <FormControl variant="outlined">
                <InputLabel htmlFor="outlined-basic">
                    Nombre de usuario
                </InputLabel>

                <OutlinedInput
                    id="outlined-basic"
                    type="username"
                    label="Nombre de usuario"
                    variant="outlined"
                    value={values.username}
                    onChange={handleChange}
                />
            </FormControl>

            <FormControl variant="outlined" className={textField}>
                <InputLabel htmlFor="outlined-adornment-password">
                    Contraseña
                </InputLabel>
                <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? "text" : "password"}
                    value={values.password}
                    onChange={handleChange}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={() => setShowPassword(!showPassword)}
                                onMouseDown={(e) => e.preventDefault()}
                                edge="end"
                            >
                                {showPassword ? (
                                    <Visibility />
                                ) : (
                                    <VisibilityOff />
                                )}
                            </IconButton>
                        </InputAdornment>
                    }
                    labelWidth={85}
                />
            </FormControl>

            <FormControlLabel
                className={rmmbr}
                control={
                    <Switch
                        checked={values.rememberMe}
                        onChange={handleCheck}
                        name="rememberMe"
                        color="primary"
                    />
                }
                label="Recuérdame"
            />

            <Button variant="contained" color="primary" type="submit">
                Ingresar
            </Button>

            {err &&
                <Typography variant="body2" color="error" className={error}>
                    Error al iniciar sesión.
                </Typography>
            }
        </PaperWithTitle>
    );
};

export default LoginForm;
