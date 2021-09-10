// External modules
import PropTypes from "prop-types";

// External components
import {
    InputLabel,
    OutlinedInput,
    FormControl,
} from "@material-ui/core";

const Input = (props) => {
    return (
        <>
            <FormControl variant="outlined" style={{ marginBottom: "8px"}}>
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
                    labelWidth={100}
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
