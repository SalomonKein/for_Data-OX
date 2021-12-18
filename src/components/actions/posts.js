import axios from "axios";
import {
  setComments,
  setIsFetching,
  setPosts,
  setTotalCount,
  setUsers,
  setAllComments,
  setNewComments,
} from "../../reducers/postReducer";

export const getPosts = (lim = 5, page = 1) => {
  return async (dispatch) => {
    dispatch(setIsFetching(true));
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?_limit=${lim}&_page=${page}`
    );
    dispatch(setPosts(response.data));
    dispatch(setTotalCount(response.headers["x-total-count"]));
  };
};

export const getUsers = () => {
  return async (dispatch) => {
    dispatch(setIsFetching(true));
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users`
    );
    dispatch(setUsers(response.data));
  };
};

export const getComments = (id) => {
  return async (dispatch) => {
    dispatch(setIsFetching(true));
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    );
    dispatch(setComments(response.data));
  };
};

export const getAllComments = () => {
  return async (dispatch) => {
    dispatch(setIsFetching(true));
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/comments`
    );
    dispatch(setAllComments(response.data));
  };
};
export const pushNewComment = (data) => {
  return async (dispatch) => {
    dispatch(setNewComments(data));
    const response = await axios.post(
      `https://jsonplaceholder.typicode.com/comments`,
      data
    );
  };
};
