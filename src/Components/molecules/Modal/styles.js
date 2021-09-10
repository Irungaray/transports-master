import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    primaryColor: {
        color: theme.palette.primary.main,
    },
    box: {
        width: "500px"
    }
}));