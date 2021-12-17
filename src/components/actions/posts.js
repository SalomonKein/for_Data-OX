import axios from "axios";
import { setComments, setIsFetching, setPosts, setTotalCount, setUsers } from "../../reducers/postReducer";

export const getPosts = (lim = 5, page =1 ) => {
    return async (dispatch) => {
        dispatch(setIsFetching(true))
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=${lim}&_page=${page}`)
    dispatch(setPosts(response.data))
    dispatch(setTotalCount(response.headers['x-total-count']))
    }
}

export const getUsers = () => {
    return async (dispatch) => {
        dispatch(setIsFetching(true))
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users`)
    dispatch(setUsers(response.data))   
    }
}

export const getComments = () => {
    return async (dispatch) => {
        dispatch(setIsFetching(true))
        const response = await axios.get(`https://jsonplaceholder.typicode.com/comments`)
    dispatch(setComments(response.data))   
    }
}