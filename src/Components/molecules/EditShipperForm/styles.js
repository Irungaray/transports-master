import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    box: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    error: {
        marginTop: theme.spacing(2),
    },
    primaryColor: {
        color: theme.palette.primary.main,
    },
}));
