import axios from 'axios'
import {
    ADD_BLOG_REQUEST,
    ADD_BLOG_REQUEST_SUUCESS,
    ADD_BLOG_REQUEST_FAIL,
    GET_ALL_BLOG_REQUEST,
    GET_ALL_BLOG_REQUEST_SUUCESS,
    GET_ALL_BLOG_REQUEST_FAIL,
    SINGLE_BLOG_REQUEST,
    SINGLE_BLOG_REQUEST_SUCCESS,
    SINGLE_BLOG_REQUEST_FAIL,
    GET_MY_BLOG_REQUEST,
    GET_MY_BLOG_REQUEST_SUUCESS,
    GET_MY_BLOG_REQUEST_FAIL,
    UPDATE_BLOG_REQUEST,
    UPDATE_BLOG_REQUEST_SUCCESS,
    UPDATE_BLOG_REQUEST_FAIL,
    DELETE_BLOG_RQEUST,
    DELETE_BLOG_RQEUST_SUCCESS,
    DELETE_BLOG_RQEUST_FAIL,
} from '../constant/blogConstant'




export const addBlogAction = (fd) => async (dispatch, getState) => {

    try {

        dispatch({ type: ADD_BLOG_REQUEST })

        const config = {
            headers: {
                "content-Type": "multipart/form-data",
                "Authorization": getState().allUsers.login.token
            }
        }
        // console.log(config.headers.Authorization);
        const { data } = await axios.post('/blog/addblog', fd, config)
        // console.log(data);
        dispatch({ type: ADD_BLOG_REQUEST_SUUCESS })



    } catch (error) {
        dispatch({ type: ADD_BLOG_REQUEST_FAIL, payload: error })



    }

}


export const getAllBlogAction = (blogData) => async (dispatch, getState) => {

    // console.log(getState().login.token);
    try {

        dispatch({ type: GET_ALL_BLOG_REQUEST })

        // const config = {
        //     headers: {
        //         "content-Type": "multipart/form-data"
        //     }
        // }
        const { data } = await axios.get('/blog')

        dispatch({ type: GET_ALL_BLOG_REQUEST_SUUCESS, payload: data.result })



    } catch (error) {
        dispatch({ type: GET_ALL_BLOG_REQUEST_FAIL, payload: error })

    }


}

export const signleBlogAction = (blogId) => async (dispatch) => {
    // console.log(blogId);
    try {
        dispatch({ type: SINGLE_BLOG_REQUEST })

        // const config = {
        //     headers: {
        //         "content-Type": "multipart/form-data"
        //     }
        // }
        const { data } = await axios.get(`/blog/sigleblog/${blogId}`)

        dispatch({ type: SINGLE_BLOG_REQUEST_SUCCESS, payload: data.result })



    } catch (error) {
        dispatch({ type: SINGLE_BLOG_REQUEST_FAIL, payload: error })

    }


}


export const myBlogAction = () => async (dispatch, getState) => {
    // console.log(getState().allUsers.login.token);
    try {

        dispatch({ type: GET_MY_BLOG_REQUEST })

        const config = {
            headers: {

                "Authorization": getState().allUsers.login.token
            }
        }
        // console.log(config);s
        const { data } = await axios.get('/blog/my/blog', config)

        dispatch({ type: GET_MY_BLOG_REQUEST_SUUCESS, payload: data.result })
        // console.log(data);

    } catch (error) {

        dispatch({ type: GET_MY_BLOG_REQUEST_FAIL, payload: error })
    }

}

export const updateBlogAction = (blogID, fd) => async (dispatch, getState) => {
    // console.log(getState().allUsers.login.token);
    console.log(blogID);
    try {

        dispatch({ type: UPDATE_BLOG_REQUEST })

        const config = {
            headers: {
                "Content-Type": "multipart/form-data",
                "Authorization": getState().allUsers.login.token
            }
        }
        // console.log(config);s
        const { data } = await axios.put(`/blog/updateblog/${blogID}`, fd, config)
        // console.log(data);
        delete data.show
        dispatch({ type: UPDATE_BLOG_REQUEST_SUCCESS, payload: data.result })
        dispatch(myBlogAction())
        // console.log(data);

    } catch (error) {

        dispatch({ type: UPDATE_BLOG_REQUEST_FAIL, payload: error })
    }

}

export const deleteBlogAction = (blogID, fd) => async (dispatch, getState) => {
    // console.log(getState().allUsers.login.token);
    console.log(blogID);
    try {
        dispatch({ type: DELETE_BLOG_RQEUST })

        const config = {
            headers: {

                "Authorization": getState().allUsers.login.token
            }
        }
        await axios.delete(`/blog/deleteblog/${blogID}`, config)
        dispatch({ type: DELETE_BLOG_RQEUST_SUCCESS })

    } catch (error) {

        dispatch({ type: DELETE_BLOG_RQEUST_FAIL, payload: error })
    }

}