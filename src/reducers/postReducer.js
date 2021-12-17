const SET_POSTS = "SET_POSTS";
const SET_USERS = "SET_USERS";
const SET_COMMENTS = "SET_COMMENTS";
const SET_IS_FETCHING = "SET_IS_FETCHING";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";

const defaultState = {
  posts: [],
  users: [],
  comments: [],
  isFetching: true,
  currentPage: 1,
  perPage: 5,
  totalCount: 0,
};

function postReducer(state = defaultState, action) {
  console.log("from postReducer", action);
  switch (action.type) {
    case SET_POSTS:
      return {
        ...state,
        posts: action.payload,
        isFetching: false,
      };
      case SET_USERS:
      return {
        ...state,
        users: action.payload,
       
      };
      case SET_COMMENTS:
      return {
        ...state,
        comments: action.payload,
        
      };
      case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload,
      };
      case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
      case SET_TOTAL_COUNT:
      return {
        ...state,
        totalCount: action.payload,
      };
    default:
      return state
  }
}

export default postReducer;

export const setPosts = (posts) => ({type:SET_POSTS, payload:posts});
export const setUsers = (users) => ({type:SET_USERS, payload:users});
export const setComments = (comments) => ({type:SET_COMMENTS, payload:comments});
export const setIsFetching = (bool) => ({type:SET_IS_FETCHING, payload:bool});
export const setCurrentPage = (page) => ({type:SET_CURRENT_PAGE, payload:page});
export const setTotalCount = (count) => ({type:SET_TOTAL_COUNT, payload:count});