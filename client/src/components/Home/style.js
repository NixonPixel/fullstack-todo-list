import { withStyles } from "@material-ui/styles";

const classes = withStyles((theme) => ({
    container: {
        padding: 16,
        paddingTop: 75,
        paddingBottom: 80 
    },
    addTodoBtn: {
        display: 'block',
        margin: '0 auto',
        marginBottom: 30,
        width: '240px'
    }
}))

export default classes