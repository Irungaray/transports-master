// External modules
import PropTypes from "prop-types";

// External components
import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Box,
} from "@material-ui/core";

// Internal modules
import { useStyles } from "./styles";

const Modal = (props) => {
    const {primaryColor } = useStyles();

    return (
        <Dialog open={props.open} onClose={props.handleClose}>
            <DialogTitle>{props.title}</DialogTitle>
            <DialogContent>{props.component}</DialogContent>
            <DialogActions>
                <Button
                    onClick={props.handleCancelButton}
                    color="default"
                    autoFocus
                >
                    {props.cancelButtonText}
                </Button>
                <Button
                    onClick={props.handleConfirmButton}
                    className={primaryColor}
                >
                    {props.confirmButtonText}
                </Button>
            </DialogActions>
        </Dialog>
    );
};

Modal.propTypes = {
    title: PropTypes.string,
    component: PropTypes.element,
    cancelButtonText: PropTypes.string,
    confirmButtonText: PropTypes.string,
    handleConfirmButton: PropTypes.func,
    handleCancelButton: PropTypes.func,
    open: PropTypes.bool,
    handleClose: PropTypes.func,
};

export default Modal;
