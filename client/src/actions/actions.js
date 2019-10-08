import Auth from '../services/auth'
import {
    authFailure, authSucces, authInProcces,
    registrationFailure, registrationSucces, registrationInProcces,
    getTodoListFailure, getTodolistSucces, getTodoListLoading, logOut, changeTodoTextSuccess, todoCreatedSuccess
} from './creators'
import Cookie from '../utils/cookie'
import Todo from '../services/todo'

const auth = new Auth()
const todo = new Todo()

const login = async (dispatch, email, password) => {
    dispatch(authInProcces())
    try {
        const { status, message } = await auth.login(email, password)
        if (status === 'error') {
            console.log(message)
            dispatch(authFailure(message))
            return
        }
        new Cookie("token", message.token, { expires: 3600 }).set()
        dispatch(authSucces())
    } catch (e) {
        dispatch(authFailure(e.message))
    }
}

const registration = async (dispatch, email, password, userName) => {
    dispatch(registrationInProcces())
    try {
        const { status, message } = await auth.registration(email, password, userName)
        if (status === 'error') {
            dispatch(registrationFailure(message))
            return
        }
        dispatch(registrationSucces(message.user.email))
    } catch (e) {
        dispatch(registrationFailure(e.message))
    }
}

const getAllTodo = async (dispatch, page, sortField) => {
    dispatch(getTodoListLoading())
    try {
        const { status, message } = await todo.getAllTodo(page, sortField)
        if (status === 'error') {
            dispatch(getTodoListFailure(message))
            return
        }
        dispatch(getTodolistSucces(message.todoList, message.totalTodo))
    } catch (e) {
        dispatch(getTodoListFailure(e.message))
    }
}

const createTodo = async (dispatch, userName, text) => {
    try {
        const { status, message } = await todo.createTodo(userName, text)
        if (status === 'error') {
            dispatch(getTodoListFailure(message))
            return
        }
        dispatch(todoCreatedSuccess())
        getAllTodo(dispatch, 1)
    } catch (e) {
        dispatch(getTodoListFailure(e.message))
    }
}

const checkToken = async (dispatch) => {
    const token = new Cookie("token").get()
    if (token) {
        dispatch(authSucces())
    }
}

const exit = (dispatch) => {
    new Cookie("token").destroy()
    dispatch(logOut())
}

const setDoneTodo = async (dispatch, id, page) => {
    try {
        const { status, message } = await todo.setDone(id)
        if (status === 'error') {
            dispatch(getTodoListFailure(message))
            return
        }
        getAllTodo(dispatch, page)
    } catch (e) {
        dispatch(getTodoListFailure(e.message))
    }
}

const changeTodoText = (dispatch, newList, id, text) => {
    console.log('change todotext')
    try {
        todo.changeTodoText(id, text).then(() => dispatch(changeTodoTextSuccess(newList)))
    } catch (e) {
        dispatch(getTodoListFailure(e.message))
    }
}

export {
    login,
    registration,
    getAllTodo,
    setDoneTodo,
    checkToken,
    changeTodoText,
    exit,
    createTodo
}