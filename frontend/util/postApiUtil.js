export const fetchAllPosts = () => {
    return $.ajax({
        method: 'GET',
        url:'/api/blog_posts'
    })
}

export const fetchPost= (postId) => {
  return $.ajax({
    method: "GET",
    url: `/api/blog_posts/${postId}`,
  });
};

export const createPost = (blog_post) => {
  return $.ajax({
    method: "POST",
      url: `/api/blog_posts`,
    data:{blog_post}
  });
};

export const deletePost = (postId) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/blog_posts/${postId}`,
    
  });
};

export const updatePost = (post) => {
  return $.ajax({
    method: "PATCH",
      url: `/api/blog_post${post.id}`,
    data:{post}
  });
};