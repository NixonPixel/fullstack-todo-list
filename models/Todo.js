import {Schema, model} from 'mongoose'

const Todo = new Schema({
    userName: {
        type: String
    },
    email: {
        type: String
    },
    status: {
        type: String,
        default: 'active'
    },
    text: {
        type: String,
        required: true
    },
    todoName: {
        type: String
    },
    createdAt: {
        type: String,
    }
})

export default model('todo', Todo)
