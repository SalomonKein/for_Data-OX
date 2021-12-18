import {combineReducers} from "redux";
import {createStore, applyMiddleware} from "redux";
import postReducer from "./postReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  state: postReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
