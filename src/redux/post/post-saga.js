import { takeLatest, put, all, call } from 'redux-saga/effects';

import PostAPI from 'rest/PostApi';
import { closeModal, addDataToModal } from 'redux/modal/modal-actions';
import PostActionTypes from './post-types';
import {
  createPostSuccess,
  createPostFailure,
  busyStart,
  fetchPostsSuccess,
  fetchPostsFailure,
  fetchPostsStart,
  deletePostSuccess,
  deletePostError,
  createPostCommentSuccess,
  createPostCommentError,
  likeUnlikeSuccess,
  likeUnlikeFailure
} from './post-actions';

export function* createPost({ payload }) {
  yield put(busyStart(true));
  try {
    yield PostAPI.create(payload);
    yield put(createPostSuccess());
    yield put(fetchPostsStart());
  } catch (err) {
    yield put(createPostFailure(err));
  } finally {
    yield put(closeModal());
  }
}
export function* getAllPosts() {
  try {
    const { data } = yield PostAPI.get();
    yield put(fetchPostsSuccess(data));
  } catch (err) {
    yield put(fetchPostsFailure(err));
  }
}
export function* deletePost({ payload }) {
  try {
    yield PostAPI.delete(payload);
    yield put(deletePostSuccess());
    yield put(fetchPostsStart());
  } catch (err) {
    yield put(deletePostError(err));
  }
}
export function* createPostComment({ payload }) {
  try {
    const { data } = yield PostAPI.createComment(payload);
    yield put(createPostCommentSuccess(data));
    yield put(addDataToModal(data));
    yield put(fetchPostsStart());
  } catch (err) {
    yield put(likeUnlikeFailure(err));
  }
}
export function* likeUnlikepost({ payload }) {
  try {
    const { data } = yield PostAPI.likeUnlike(payload);
    yield put(likeUnlikeSuccess(data));
  } catch (err) {
    yield put(createPostCommentError(err));
  }
}

export function* onCreatePostStart() {
  yield takeLatest(PostActionTypes.CREATE_POST_START, createPost);
}
export function* onGetAllPosts() {
  yield takeLatest(PostActionTypes.FETCH_POSTS_START, getAllPosts);
}
export function* onDeletePost() {
  yield takeLatest(PostActionTypes.DELETE_POST_START, deletePost);
}
export function* onLikeUnlikePost() {
  yield takeLatest(PostActionTypes.POST_LIKE_UNLIKE_START, likeUnlikepost);
}
export function* onCreatePostComment() {
  yield takeLatest(
    PostActionTypes.CREATE_POST_COMMENT_START,
    createPostComment
  );
}

export function* postSagas() {
  yield all([
    call(onCreatePostStart),
    call(onGetAllPosts),
    call(onDeletePost),
    call(onCreatePostComment),
    call(onLikeUnlikePost)
  ]);
}
