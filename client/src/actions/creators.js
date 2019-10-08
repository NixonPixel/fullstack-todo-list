import {
    AUTH_SUCCESS, AUTH_FAILURE, AUTH_IN_PROCCES, 
    GET_TODO_LIST_FAILURE, GET_TODO_LIST_SUCCES, GET_TODO_LIST_LOADING,
    REGISTRATION_SUCCESS, REGISTRATION_IN_PROCCES, REGISTRATION_FAILURE,
    SET_DONE_TODO_SUCCESS, LOG_OUT, CHANGE_TODO_TEXT, TODO_CREATED_SUCCESS
} from './types'

const authSucces = () => {
    return {
        type: AUTH_SUCCESS,
    }
}

const authFailure = (err) => {
    console.log(err)
    return {
        type: AUTH_FAILURE,
        payload: err
    }
}

const authInProcces = () => {
    return {
        type: AUTH_IN_PROCCES,
    }
}

const registrationSucces = (email) => {
    return {
        type: REGISTRATION_SUCCESS,
        payload: email
    }
}

const registrationFailure = (err) => {
    return {
        type: REGISTRATION_FAILURE,
        payload: err
    }
}

const registrationInProcces = () => {
    return {
        type: REGISTRATION_IN_PROCCES
    }
}

const getTodolistSucces = (todoList, totalTodo) => {
    return {
        type: GET_TODO_LIST_SUCCES,
        payload: {todoList, totalTodo}
    }
}

const getTodoListFailure = (err) => {
    return {
        type: GET_TODO_LIST_FAILURE,
        payload: err
    }
}

const logOut = () => {
    return {
        type: LOG_OUT,
    }
}
const changeTodoTextSuccess = (newList) => {
    return {
        type: CHANGE_TODO_TEXT,
        payload: newList
    }
} 

const getTodoListLoading = () => {
    return {
        type: GET_TODO_LIST_LOADING
    }
}

const setTodoListDoneSuccess = (id) => {
    return {
        type: SET_DONE_TODO_SUCCESS,
        payload: id,
    }
}

const todoCreatedSuccess = () => {
    return {
        type: TODO_CREATED_SUCCESS
    }
}

export {
    authSucces,
    authInProcces,
    authFailure,
    registrationFailure,
    registrationInProcces,
    registrationSucces,
    getTodoListFailure,
    getTodoListLoading,
    getTodolistSucces,
    setTodoListDoneSuccess,
    logOut,
    changeTodoTextSuccess,
    todoCreatedSuccess
}