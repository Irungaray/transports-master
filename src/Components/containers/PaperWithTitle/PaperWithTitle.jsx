// External modules
import PropTypes from "prop-types";

// External components
import {
    Paper,
    Typography,
    Container,
} from "@material-ui/core";

// Internal modules
import { useStyles } from "./styles";

const PaperWithTitle = (props) => {
    const { container, paper, title, form } = useStyles();

    return (
        <Container className={container} maxWidth="sm">
            <Paper className={paper} elevation={3}>
                {props.title &&
                    <Typography variant="h4" className={title}>
                        {props.title}
                    </Typography>
                }

                {props.isForm
                    ? <form onSubmit={props.onSubmit} className={form}>{props.children}</form>
                    : <>{props.children}</>
                }
            </Paper>
        </Container>
    );
};

PaperWithTitle.propTypes = {
    title: PropTypes.string,
    onSubmit: PropTypes.func,
    isForm: PropTypes.bool,
    children: PropTypes.any,
};

export default PaperWithTitle;
