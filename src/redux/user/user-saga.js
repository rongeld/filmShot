import { takeLatest, put, all, call } from 'redux-saga/effects';

import UserAPI from 'rest/UserApi';
import UserActionTypes from './user-types';
import {
  signInSuccess,
  signUpFailure,
  busyStart,
  updateMeSuccess,
  getSingleUserSuccess,
  getSingleUserFailure,
  updateMeFailure
} from './user-actions';

export function* signUp({ payload }) {
  yield put(busyStart(true));
  try {
    const { token, user } = yield UserAPI.signUp(payload);
    const userToSafe = {
      token,
      ...user
    };
    yield put(signInSuccess(userToSafe));
  } catch (err) {
    yield put(signUpFailure(err));
  }
}
export function* signInWithEmail({ payload }) {
  yield put(busyStart(false));
  try {
    const { token, user } = yield UserAPI.signIn(payload);
    const userToSafe = {
      token,
      ...user
    };
    yield put(signInSuccess(userToSafe));
  } catch (err) {
    yield put(signUpFailure(err));
  }
}
export function* updateMe({ payload }) {
  yield put(busyStart());
  try {
    const data = yield UserAPI.updateMe(payload);
    yield put(updateMeSuccess(data));
  } catch (err) {
    yield put(updateMeFailure(err));
  }
}
export function* getSingleUser({ payload }) {
  try {
    const { data } = yield UserAPI.getSingleUser(payload);
    yield put(getSingleUserSuccess(data));
  } catch (err) {
    yield put(getSingleUserFailure(err));
  }
}

export function* onSignUpStart() {
  yield takeLatest(UserActionTypes.SIGN_UP_START, signUp);
}
export function* onSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}
export function* onUpdateMeStart() {
  yield takeLatest(UserActionTypes.UPDATE_ME_START, updateMe);
}
export function* onGetSingleUser() {
  yield takeLatest(UserActionTypes.GET_SINGLE_USER_START, getSingleUser);
}

export function* userSagas() {
  yield all([
    call(onSignUpStart),
    call(onSignInStart),
    call(onUpdateMeStart),
    call(onGetSingleUser)
  ]);
}
