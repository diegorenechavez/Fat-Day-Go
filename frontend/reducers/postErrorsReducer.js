import {
  CLEAR_ERRORS,
  RECEIVE_POST_ERRORS,
  RECEIVE_POST,
} from "../actions/blogPostActions";

const PostErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_POST_ERRORS:
      return action.errors;
    case RECEIVE_POST:
      return [];
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
};

export default PostErrorsReducer;
