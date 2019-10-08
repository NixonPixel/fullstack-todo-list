import auth from './auth'
import todo from './todo'

const reducer = (state, action) => {
    return {
       auth: auth(state, action),
       todo: todo(state, action)
    }
}

export default reducer