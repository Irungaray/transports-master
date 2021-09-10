import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    row: {
        backgroundColor: "white"
    },
    cell: {
        height: theme.spacing(2),
        marginRight: theme.spacing(2),
        marginLeft: theme.spacing(2),
    }
}));
