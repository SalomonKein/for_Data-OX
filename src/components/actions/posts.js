import axios from "axios";
import { setIsFetching, setPosts, setTotalCount } from "../../reducers/postReducer";

export const getPosts = (lim = 5, page =1 ) => {
    return async (dispatch) => {
        dispatch(setIsFetching(true))
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=${lim}&_page=${page}`)
    dispatch(setPosts(response.data))
    dispatch(setTotalCount(response.headers['x-total-count']))
    }
}