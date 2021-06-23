import {
  RECEIVE_POSTS,
  RECEIVE_POST,
  REMOVE_POST,
} from "../actions/blogPostActions";

const PostsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  const newState = Object.assign({}, oldState);
  switch (action.type) {
    case RECEIVE_POSTS:
      return action.posts;
    case RECEIVE_POST:
      newState[action.post.id] = action.post;
      return newState;
    case REMOVE_POST:
      delete newState[action.postId];
      return newState;
    default:
      return oldState;
  }
};

export default PostsReducer;
