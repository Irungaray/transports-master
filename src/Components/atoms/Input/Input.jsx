// External modules
import PropTypes from "prop-types";

// External components
import {
    InputLabel,
    OutlinedInput,
    FormControl,
} from "@material-ui/core";

const Input = (props) => {
    const wdth = props.label.length * 8.5;

    console.log(wdth);
    return (
        <>
            <FormControl variant="outlined" style={{ marginBottom: "16px", width: "100%"}}>
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
