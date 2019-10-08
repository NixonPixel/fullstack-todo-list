import Coolie from '../utils/cookie'

const token = new Coolie("token").get()

class Todo {
    getAllTodo = (page = 1, sortField = 'createdAt', sortDirections = "1") => {
        return fetch(`/api/todo/?page=${page}&sortField=${sortField}&sortDirections=${sortDirections}`).then(res => res.json())
    }

    setDone = async (id) => {
        const body = {
            status: "done"
        }
        return fetch(`/api/todo/${id}`, {
            method: 'PATCH',
            headers: {
                "Authorization": token,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        }).then(res => res.json())
    }

    createTodo = (userName, text) => {
        console.log('sdasd')
        return fetch('/api/todo/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({userName, text})
        }).then(res => res.json())
    }

    changeTodoText = (id, text) => {
        const body = {
            text
        }
        return fetch(`/api/todo/${id}`, {
            method: 'PATCH',
            headers: {
                "Authorization": token,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        }).then(res => res.json())
    }

}

export default Todo