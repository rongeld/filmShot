import PostActionTypes from './post-types';

// Create post
export const createPostStart = data => ({
  type: PostActionTypes.CREATE_POST_START,
  payload: data
});

export const createPostSuccess = data => ({
  type: PostActionTypes.CREATE_POST_SUCCESS,
  payload: data
});

export const createPostFailure = err => ({
  type: PostActionTypes.CREATE_POST_FAILURE,
  payload: err
});

// Fetch posts
export const busyStart = status => ({
  type: PostActionTypes.CREATE_POST_BUSY,
  payload: status
});

export const fetchPostsStart = () => ({
  type: PostActionTypes.FETCH_POSTS_START
});

export const fetchPostsSuccess = data => ({
  type: PostActionTypes.FETCH_POSTS_SUCCESS,
  payload: data
});

export const fetchPostsFailure = err => ({
  type: PostActionTypes.FETCH_POSTS_FAILURE,
  payload: err
});

// Delete post
export const deletePostStart = id => ({
  type: PostActionTypes.DELETE_POST_START,
  payload: id
});

export const deletePostSuccess = () => ({
  type: PostActionTypes.DELETE_POST_SUCCESS
});

export const deletePostError = err => ({
  type: PostActionTypes.DELETE_POST_FAILURE,
  payload: err
});

// Delete post
export const createPostCommentStart = id => ({
  type: PostActionTypes.CREATE_POST_COMMENT_START,
  payload: id
});

export const createPostCommentSuccess = data => ({
  type: PostActionTypes.CREATE_POST_COMMENT_SUCCESS,
  payload: data
});

export const createPostCommentError = err => ({
  type: PostActionTypes.CREATE_POST_COMMENT_FAILURE,
  payload: err
});

export const likeUnlikeStart = data => ({
  type: PostActionTypes.POST_LIKE_UNLIKE_START,
  payload: data
});
export const likeUnlikeSuccess = data => ({
  type: PostActionTypes.POST_LIKE_UNLIKE_SUCCESS,
  payload: data
});
export const likeUnlikeFailure = data => ({
  type: PostActionTypes.POST_LIKE_UNLIKE_FAILURE,
  payload: data
});
