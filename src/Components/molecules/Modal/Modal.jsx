// External modules
import PropTypes from "prop-types";

// External components
import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Typography,
} from "@material-ui/core";

const Modal = (props) => {
    return (
        <Dialog open={props.open} onClose={props.handleClose}>
            <DialogTitle>
                {props.title}

                <Button
                    onClick={props.handleCancelButton}
                    color="default"
                    autoFocus
                >
                    <Typography variant="body1">
                        X
                    </Typography>
                </Button>
            </DialogTitle>
            <DialogContent>{props.component}</DialogContent>
            <DialogActions>

            </DialogActions>
        </Dialog>
    );
};

Modal.propTypes = {
    title: PropTypes.string,
    component: PropTypes.element,
    cancelButtonText: PropTypes.string,
    handleConfirmButton: PropTypes.func,
    handleCancelButton: PropTypes.func,
    open: PropTypes.bool,
    handleClose: PropTypes.func,
};

export default Modal;
