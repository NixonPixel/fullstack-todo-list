import Todo from '../models/Todo'
import errorHandler from '../utils/errorHandler'

const pretifyDate = (date) => {
    return `${String(date.getDate()).padStart(2, 0)}.${String(date.getMonth()).padStart(2, 0)} ${String(date.getHours()).padStart(2, 0)}:${String(date.getMinutes()).padStart(2, 0)}`
}

const getAllTodo = async function (req, res) {
    try {
        let { sortField, sortDirections, status = 'active', page = 1, count = 3 } = req.query
        const todoList = await Todo
            .find({ status })
            .sort([[sortField, sortDirections]])
            .skip(Number(count) * page - Number(count))
            .limit(Number(count))

        const totalTodo = await Todo.find({ status }).count()
        res.status(200).json({
            status: "ok",
            message: {
                todoList: todoList,
                totalTodo
            }
        })
    } catch (e) {
        errorHandler(res, { message: e.message })
    }
}

const createTodo = async function (req, res) {
    const { text, userName, todoName } = req.body
    const dateNow = new Date()
    const createdAt = pretifyDate(dateNow)
    try {
        const todo = await new Todo({
            userName,
            text,
            createdAt,
            todoName
        }).save()
        res.status(200).json({ message: todo })
    } catch (e) {
        errorHandler(res, { message: e.message })
    }
}

const deleteTodo = async function (req, res) {
    try {
        const { id } = req.params
        const todo = await Todo.findOneAndDelete({ _id: id })
        res.status(200).json({
            status: 'ok',
            message: {
                todo
            }
        })
    } catch (e) {
        errorHandler(res, { message: e.message })
    }
}

const updateTodo = async function (req, res) {
    const updated = {
        ...req.body
    }
    try {
        const { id } = req.params
        const todo = await Todo.findOneAndUpdate(
            { _id: id },
            { $set: updated },
            { new: true }
        )
        res.status(200).json({
            status: 'ok',
            message: {
                todo
            }
        })
    } catch (e) {
        errorHandler(res, { message: e.message })
    }
}

const getTodoById = async function (req, res) {
    const { id } = req.params
    try {
        const todo = await Todo.findById(id)
        res.status(200).json({
            status: 'ok',
            message: {
                todo
            }
        })
    } catch (e) {
        errorHandler(res, { message: e.message })
    }
}

export {
    getAllTodo,
    createTodo,
    deleteTodo,
    updateTodo,
    getTodoById
}