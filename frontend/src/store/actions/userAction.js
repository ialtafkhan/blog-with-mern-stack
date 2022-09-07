import axios from 'axios'

import {
    SIGNUP_REQUEST,
    SIGNUP_REQUEST_SUCCESS,
    SIGNUP_REQUEST_FAIL,
    LOGIN_REQUEST,
    LOGIN_REQUEST_SUCCESS,
    LOGIN_REQUEST_FAIL,
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


}
    from '../constant/userConstant'


export const signUpUserAction = (fd) => async (dispatch) => {
    console.log(fd);
    try {
        dispatch({ type: SIGNUP_REQUEST })

        const { data } = await axios.post("/user/register", fd, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })

        console.log(data);
        dispatch({ type: SIGNUP_REQUEST_SUCCESS })

    } catch (error) {
        dispatch({ type: SIGNUP_REQUEST_FAIL, payload: error })

    }

}


export const userLoginAction = (fd) => async (dispatch) => {
    console.log(fd);
    try {
        dispatch({ type: LOGIN_REQUEST })
        const { data } = await axios.post("/user/auth/login", fd,)
        if (data.result.token) {
            dispatch({ type: LOGIN_REQUEST_SUCCESS, payload: data.result })
            localStorage.setItem("user", JSON.stringify(data.result))

        } else {
            dispatch({ type: LOGIN_REQUEST_FAIL, payload: "Username or password Wrong" })

        }
        console.log(data);


    } catch (error) {
        dispatch({ type: LOGIN_REQUEST_FAIL, payload: error })

    }

}

export const userISAction = (id, val) => async (dispatch) => {
    // console.log(fd);
    try {

        dispatch({ type: USER_ADMIN_REQUEST })
        const { data } = await axios.put(`/user/isAdmin/${id}`, { isAdmin: val })
        // console.log(data);
        dispatch({ type: USER_ADMIN_REQUEST_SUCCESS })

    } catch (error) {

        dispatch({ type: USER_ADMIN_REQUEST_FAIL, payload: error })
    }

}
export const getAllUserAction = (fd) => async (dispatch) => {
    // console.log(fd);
    try {

        dispatch({ type: GET_ALL_USER_REQUEST })
        const { data } = await axios.get('/user')
        // console.log(data);
        dispatch({ type: GET_ALL_USER_REQUEST_SUCCESS, payload: data.result })

    } catch (error) {

        dispatch({ type: GET_ALL_USER_REQUEST_FAIL, payload: error })
    }

}
export const deletSingleUserAction = (id) => async (dispatch) => {
    // console.log(fd);
    try {

        dispatch({ type: DELETE_SINGLE_USER })
        const { data } = await axios.delete(`/user/delete/${id}`)
        // console.log(data);
        dispatch({ type: DELETE_SINGLE_USER_SUCCESS })

    } catch (error) {

        dispatch({ type: DELETE_SINGLE_USER_FAIL, payload: error })
    }

}


export const userLogoutAction = (fd) => async (dispatch) => {

    localStorage.removeItem("user")
    dispatch({ type: LOGOUT })

}