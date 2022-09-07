import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { blogRedicer } from './reducer/blogReducer'
import { userReducer } from './reducer/userReducer'

const localLogin = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null
const rootReducer = combineReducers({
    allUsers: userReducer,
    allBlogs: blogRedicer
})

const initialState = {
    allUsers: { login: localLogin }
}

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk)))


export default store