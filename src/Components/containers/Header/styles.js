import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: theme.spacing(1),
    },
    btn: {
        padding: 0,
        margin: 0,
        width: "0px",
        height: "20px",
        border: "1px solid red"
    }
}));
