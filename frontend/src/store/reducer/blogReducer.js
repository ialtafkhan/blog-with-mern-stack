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

export const blogRedicer = (state = { blogs: [], singleblog: {}, myBlog: [] }, { type, payload }) => {

    switch (type) {
        case ADD_BLOG_REQUEST: return { isLoading: true, }
        case ADD_BLOG_REQUEST_SUUCESS: return { isLoading: false, blogAdded: true }
        case ADD_BLOG_REQUEST_FAIL: return { isLoading: false, error: payload }

        case GET_ALL_BLOG_REQUEST: return { ...state, isLoading: true, }
        case GET_ALL_BLOG_REQUEST_SUUCESS: return { ...state, isLoading: false, blogs: payload }
        case GET_ALL_BLOG_REQUEST_FAIL: return { ...state, isLoading: false, error: payload }

        case SINGLE_BLOG_REQUEST: return { ...state, isLoading: true }
        case SINGLE_BLOG_REQUEST_SUCCESS: return { ...state, isLoading: false, singleblog: payload }
        case SINGLE_BLOG_REQUEST_FAIL: return { ...state, isLoading: false, error: payload }

        case GET_MY_BLOG_REQUEST: return { ...state, isLoading: true }
        case GET_MY_BLOG_REQUEST_SUUCESS: return { ...state, isLoading: false, myBlog: payload }
        case GET_MY_BLOG_REQUEST_FAIL: return { ...state, isLoading: false, error: payload }

        case UPDATE_BLOG_REQUEST: return { ...state, isLoading: true }
        case UPDATE_BLOG_REQUEST_SUCCESS: return { ...state, isLoading: false, isUpdated: true }
        case UPDATE_BLOG_REQUEST_FAIL: return { ...state, isLoading: false, error: payload }

        case DELETE_BLOG_RQEUST: return { ...state, isLoading: true }
        case DELETE_BLOG_RQEUST_SUCCESS: return { ...state, isLoading: false, isDeleted: true }
        case DELETE_BLOG_RQEUST_FAIL: return { ...state, isLoading: false, error: payload }

        default: return state

    }

}

