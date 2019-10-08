import {withStyles} from '@material-ui/core'

const classes = withStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        maxWidth: 400,
        margin: '0 auto',
        padding: theme.spacing(2)
    },
    input: {
        margin: theme.spacing(3),
    },
    error: {
        color: 'tomato',
        textAlign: 'center',
        display:' block',
    }
}))

export default classes