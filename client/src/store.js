import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers/'

const store = createStore(reducer, applyMiddleware(thunk))
store.getState()
export default store