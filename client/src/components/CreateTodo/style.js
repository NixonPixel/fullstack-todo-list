import { withStyles } from "@material-ui/core";

const classes = withStyles((theme) => ({
    container: {
        maxWidth: 1100,
        padding: theme.spacing(2),
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    textArea: {
        width: 260,
        minHeight: 90
    }
}))

export default classes