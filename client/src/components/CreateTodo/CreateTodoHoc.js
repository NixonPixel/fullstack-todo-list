import { compose } from "recompose";
import withStyles from './style'
import {connect} from 'react-redux'
import {createTodo} from '../../actions/actions'

const mapDispatchToProps = (dispatch) => ({
    createTodo: (userName, text, todoName) => createTodo(dispatch, userName, text, todoName)
})

const mapStateToProps = ({todo: {errorMessage, isCreated}}) => ({
    errorMessage, isCreated
})

export default compose(withStyles, connect(mapStateToProps, mapDispatchToProps))