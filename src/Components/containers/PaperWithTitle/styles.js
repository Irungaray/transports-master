import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
            minHeight: "80vh",
        // marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2)
    },
    // center: {
    //     display: "flex",
    //     justifyContent: "center",
    //     minHeight: "80vh",
    //     alignItems: "center",
    // },
    paper: {
        padding: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    title: {
        marginBottom: theme.spacing(2)
    },
    form: {
        display: "flex",
        flexDirection: 'column',
    }
}));
