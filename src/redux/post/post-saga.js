import { takeLatest, put, all, call } from 'redux-saga/effects';

import PostAPI from 'rest/PostApi';
import { closeModal } from 'redux/modal/modal-actions';
import PostActionTypes from './post-types';
import {
  createPostSuccess,
  createPostFailure,
  busyStart,
  fetchPostsSuccess,
  fetchPostsFailure,
  fetchPostsStart
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
    const {
      data: { data }
    } = yield PostAPI.get();
    yield put(fetchPostsSuccess(data));
  } catch (err) {
    yield put(fetchPostsFailure(err));
  }
}

export function* onCreatePostStart() {
  yield takeLatest(PostActionTypes.CREATE_POST_START, createPost);
}
export function* onGetAllPosts() {
  yield takeLatest(PostActionTypes.FETCH_POSTS_START, getAllPosts);
}

export function* postSagas() {
  yield all([call(onCreatePostStart), call(onGetAllPosts)]);
}
