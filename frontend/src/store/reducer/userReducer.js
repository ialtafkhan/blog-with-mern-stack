import {

    LOGIN_REQUEST,
    LOGIN_REQUEST_SUCCESS,
    LOGIN_REQUEST_FAIL,
    SIGNUP_REQUEST,
    SIGNUP_REQUEST_SUCCESS,
    SIGNUP_REQUEST_FAIL,
    GET_ALL_USER_REQUEST,
    GET_ALL_USER_REQUEST_SUCCESS,
    GET_ALL_USER_REQUEST_FAIL,
    USER_ADMIN_REQUEST,
    USER_ADMIN_REQUEST_SUCCESS,
    USER_ADMIN_REQUEST_FAIL,
    DELETE_SINGLE_USER,
    DELETE_SINGLE_USER_SUCCESS,
    DELETE_SINGLE_USER_FAIL,
    LOGOUT,

} from '../constant/userConstant'


export const userReducer = (State = { users: [] }, { type, payload }) => {

    switch (type) {

        case LOGIN_REQUEST: return { isloading: true, }
        case LOGIN_REQUEST_SUCCESS: return { isloading: false, login: payload }
        case LOGIN_REQUEST_FAIL: return { isloading: false, error: payload }


        case SIGNUP_REQUEST: return { isloading: true, }
        case SIGNUP_REQUEST_SUCCESS: return { isloading: false, signup: true }
        case SIGNUP_REQUEST_FAIL: return { isloading: false, error: payload }

        case GET_ALL_USER_REQUEST: return { ...State, isloading: true, }
        case GET_ALL_USER_REQUEST_SUCCESS: return { ...State, isloading: false, users: payload }
        case GET_ALL_USER_REQUEST_FAIL: return { ...State, isloading: false, error: payload }

        case USER_ADMIN_REQUEST: return { ...State, isLoading: true }
        case USER_ADMIN_REQUEST_SUCCESS: return { ...State, isLoading: false, isAdmin: true }
        case USER_ADMIN_REQUEST_FAIL: return { ...State, isLoading: false, error: payload }

        case DELETE_SINGLE_USER: return { isLoadin: true }
        case DELETE_SINGLE_USER_SUCCESS: return { isLoadin: false, isUserDeleted: true }
        case DELETE_SINGLE_USER_FAIL: return { isLoadin: false, error: payload }
        case LOGOUT: return {}

        default: return State

    }
}