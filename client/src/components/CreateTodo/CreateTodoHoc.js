import { compose } from "recompose";
import withStyles from './style'
import {connect} from 'react-redux'
import {createTodo} from '../../actions/actions'

const mapDispatchToProps = (dispatch) => ({
    createTodo: (userName, text) => createTodo(dispatch, userName, text)
})

const mapStateToProps = ({todo: {errorMessage, isCreated}}) => ({
    errorMessage, isCreated
})

export default compose(withStyles, connect(mapStateToProps, mapDispatchToProps))