import {withStyles} from '@material-ui/core'

const classes = withStyles((theme) => ({
    container: {
        display: 'flex',
        marginTop: '16px',
        marginBottom: '16px'
    },
    sortContainer: {
        display: 'flex',
        alignItems: 'center'
    },
    sortItem: {
        display: 'flex',
        alignItems: 'center'
    }
}))

export default classes