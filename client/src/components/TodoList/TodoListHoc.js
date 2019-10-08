import { compose } from "recompose";
import {connect} from 'react-redux'
import {getAllTodo, changeTodoText} from '../../actions/actions'
import withStyles from './style'

const mapStateToProps = ({todo: {todoList, isLoading, errorMessage, todoCount = 0}}) => ({
    todoList,
    isLoading,
    errorMessage,
    todoCount
})

const mapDispatchToProps = (dispatch) => ({
    getAllTodo: (page, sortField, sordDirections) => {
        return getAllTodo(dispatch, page, sortField, sordDirections)
    },
    changeTodoText: (newList, id, text) => changeTodoText(dispatch, newList, id, text)
})

export default compose(connect(mapStateToProps, mapDispatchToProps), withStyles)