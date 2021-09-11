// External modules
import PropTypes from "prop-types";

// External components
import {
    FormControlLabel,
    Switch,
} from "@material-ui/core";

// Internal modules
import { useStyles } from "./styles";

const SwitchInput = (props) => {
    const { rmmbr } = useStyles();

    return (
        <>
            <FormControlLabel
                className={rmmbr}
                control={
                    <Switch
                        checked={props.checked}
                        onChange={props.onChange}
                        name={props.name}
                        color="primary"
                    />
                }
                label={props.label}
            />
        </>
    );
};

SwitchInput.propTypes = {
    checked: PropTypes.bool,
    onChange: PropTypes.func,
    name: PropTypes.string,
    label: PropTypes.string,
};

export default SwitchInput;
