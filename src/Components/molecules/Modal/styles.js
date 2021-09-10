import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    primaryColor: {
        color: theme.palette.primary.main,
    },
    box: {
        display: "flex",
        justifyContent: "center",
        width: "500px"
    }
}));