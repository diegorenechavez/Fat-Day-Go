import * as PostApiUtil from "../util/postApiUtil";

export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_POST_ERRORS = "RECEIVE_POST_ERRORS";
export const RECEIVE_POST = "RECEIVE_POST";
export const REMOVE_POST = "REMOVE_POST";
export const CLEAR_ERRORS = "CLEAR_ERRORS"

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_POST_ERRORS,
    errors,
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};

const received_all_posts = (posts) => {
  return {
    type: RECEIVE_POSTS,
    posts,
  };
};

const received_post = (post) => {
  return {
    type: RECEIVE_POST,
    post,
  };
};

const removedPost = (postId) => {
  return {
    type: REMOVE_POST,
    postId,
  };
};

export const fetchAllPosts = () => (dispatch) => {
  return PostApiUtil.fetchAllPosts().then((result) =>
    dispatch(received_all_posts(result))
  );
};

export const fetchPost = (postId) => (dispatch) => {
  return PostApiUtil.fetchPost(postId).then((result) =>
    dispatch(received_post(result))
  );
};

export const createPost = (blog_post) => (dispatch) => {
  return PostApiUtil.createPost(blog_post)
    .then((result) => dispatch(received_post(result)))
    .fail((error) => dispatch(receiveErrors(error.responseJSON)));
  
};

export const updatePost = (post) => (dispatch) => {
  return PostApiUtil.updatePost(post).then((result) =>
    dispatch(received_post(result))
  );
};

export const deletePost = (postId) => (dispatch) => {
  return PostApiUtil.deletePost(postId).then(() =>
    dispatch(removedPost(postId))
  );
};
