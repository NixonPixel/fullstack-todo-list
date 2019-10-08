import {withStyles} from '@material-ui/core'

const classes = withStyles((theme) => ({
    authLink: {
        textDecoration: 'none',
        display: 'block',
        padding: theme.spacing(1),
        background: 'rgba(0, 0, 0, 0.1)',
        marginLeft: 8,
        borderRadius: 4,
        '&:active': {
            marginTop: 4
        }
    },
    toolBar: {
        justifyContent: 'flex-end'
    },
    activeAuthLink: {
        opacity: '.8',
        boxShadow: '1px 2px 5px #000;'
    },
    main: {
        paddingTop: 70
    },

}))

export default classes