import PostActionTypes from './post-types';

export const createPostStart = data => ({
  type: PostActionTypes.CREATE_POST_START,
  payload: data
});

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

export const createPostSuccess = data => ({
  type: PostActionTypes.CREATE_POST_SUCCESS,
  payload: data
});

export const createPostFailure = err => ({
  type: PostActionTypes.CREATE_POST_FAILURE,
  payload: err
});
