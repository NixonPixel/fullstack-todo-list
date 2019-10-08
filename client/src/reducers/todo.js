import {GET_TODO_LIST_FAILURE, GET_TODO_LIST_SUCCES, GET_TODO_LIST_LOADING, SET_DONE_TODO_SUCCESS, CHANGE_TODO_TEXT, TODO_CREATED_SUCCESS} from '../actions/types'

const todo = (state, action) => {
    if(state === undefined){
        return {
            todoList: [],
            isLoading: false,
            errorMessage: '',
            todoCount: 0,
            isCreated: false
        }
    }
    switch(action.type) {
        case GET_TODO_LIST_FAILURE: {
            return {
                ...state.todo,
                todoList: [],
                isLoading: false,
                errorMessage: action.payload,
                todoCount: 0,
            }
        }
        case GET_TODO_LIST_LOADING: {
            return {
                ...state.todo,
                todoList: [],
                isLoading: true,
                errorMessage: '',
                todoCount: 0,
            }
        }
        case GET_TODO_LIST_SUCCES: {
            return {
                ...state.todo,
                todoList: action.payload.todoList,
                isLoading: false,
                errorMessage: '',
                todoCount: action.payload.totalTodo,
                
            }
        }
        case SET_DONE_TODO_SUCCESS : {
            let newTodoList = [...state.todo.todoList]
            newTodoList.filter((item) => item._id !== action.payload)
            return {
                ...state.todo,
                todoList: [...newTodoList],
            }
        }
        case CHANGE_TODO_TEXT: {
            return {
                ...state.todo,
                todoList: action.payload,
                isLoading: false,
                errorMessage: '',
                todoCount: 0,
            }
        }
        case TODO_CREATED_SUCCESS: {
            return{
                ...state.todo,
                todoList: action.payload,
                isLoading: false,
                errorMessage: '',
                isCreated: true
            }
        }
        default: 
            return state.todo
    }
}

export default todo