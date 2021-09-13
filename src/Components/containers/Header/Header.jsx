// External modules
import PropTypes from "prop-types";

// External components
import { Button, Container } from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

// Internal modules
import { useStyles } from "./styles";
import TateIcon from "../../atoms/TateIcon/TateIcon";

const Header = (props) => {
    const { container } = useStyles();

    return (
        <Container maxWidth="xl" className={container}>
            <TateIcon />

            {props.isLogged && (
                <Button onClick={props.onClick}>
                    <ExitToAppIcon />
                </Button>
            )}

            {props.children}
        </Container>
    );
};

Header.propTypes = {
    onClick: PropTypes.func,
};

export default Header;
