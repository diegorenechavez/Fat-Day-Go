import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import postsReducer from './postsReducer';
const entitiesReducer = combineReducers({
  users: usersReducer,
  posts: postsReducer
});

export default entitiesReducer;
