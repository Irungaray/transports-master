// External modules
import PropTypes from "prop-types";

// External components
import {
    TableCell,
    Typography,
} from "@material-ui/core";

// Internal modules
import { useStyles } from "./styles";

const Cell = (props) => {
    const { cell } = useStyles();

    return (
        <TableCell>
            <Typography variant="body2" className={cell}>
                {props.text}
            </Typography>
        </TableCell>
    );
};

Cell.propTypes = {
    text: PropTypes.string,
};

export default Cell;
