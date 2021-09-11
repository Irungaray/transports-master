// External modules
import PropTypes from "prop-types";

// External components
import {
    InputLabel,
    OutlinedInput,
    FormControl,
} from "@material-ui/core";

// Internal modules
import { useStyles } from "./styles";

const Input = (props) => {
    const { inpt } = useStyles();

    const wdth = props.label.length * 8.5;

    return (
        <>
            <FormControl variant="outlined" className={inpt}>
                <InputLabel htmlFor="outlined-basic">
                    {props.label}
                </InputLabel>

                <OutlinedInput
                    id="outlined-basic"
                    variant="outlined"
                    type={props.type}
                    value={props.value}
                    onChange={props.onChange}
                    name={props.name}
                    labelWidth={wdth}
                />
            </FormControl>
        </>
    );
};

Input.propTypes = {
    type: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    name: PropTypes.string,
};

export default Input;
