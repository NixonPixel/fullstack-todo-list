import { withStyles } from "@material-ui/core";

const classes = withStyles((theme) => ({
    container: {
        padding: theme.spacing(2),
        margin: theme.spacing(1),
        flexGrow: 1,
        width: '100%',
        border: '2px solid #999',
        borderRadius: '4px',
        maxWidth: '33.33%',
        overflowY: 'auto'
    },
    body: {
        textAlign: 'center'
    },
    head: {
       marginBottom: 26,
       textAlign: "center"
    },
    textarea: {
        width: '100%',
        display: 'block',
        resize: 'none',
        border: 'none',
        height: 140,
        outline: 'none',
        fontFamily: 'Roboto, sans-serif',
        fontSize: '1.15rem'
    },
}))

export default classes
