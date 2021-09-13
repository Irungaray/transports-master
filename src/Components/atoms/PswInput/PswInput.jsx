// External modules
import { useState } from "react";
import PropTypes from "prop-types";

// External components
import {
    InputLabel,
    OutlinedInput,
    InputAdornment,
    IconButton,
    FormControl,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";

const PswInput = (props) => {
    const [showPassword, setShowPassword] = useState(false);

    const wdth = props.label.length * 8.5;

    return (
        <FormControl variant="outlined" style={{ backgroundColor: "white" }}>
            <InputLabel htmlFor="outlined-adornment-password">
                {props.label}
            </InputLabel>
            <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={() => setShowPassword(!showPassword)}
                            onMouseDown={(e) => e.preventDefault()}
                            edge="end"
                        >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                }
                labelWidth={wdth}
            />
        </FormControl>
    );
};

PswInput.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    name: PropTypes.string,
};

export default PswInput;
