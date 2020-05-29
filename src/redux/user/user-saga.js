import { takeLatest, put, all, call } from 'redux-saga/effects';

import UserAPI from 'rest/UserApi';
import UserActionTypes from './user-types';
import {
  signInSuccess,
  signUpFailure,
  busyStart,
  updateMeSuccess
} from './user-actions';

export function* signUp({ payload }) {
  yield put(busyStart(true));
  try {
    const {
      data: { token, user }
    } = yield UserAPI.signUp(payload);
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
    const {
      data: { token, user }
    } = yield UserAPI.signIn(payload);
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
    const { data } = yield UserAPI.updateMe(payload);
    yield put(updateMeSuccess(data));
  } catch (err) {
    yield put(signUpFailure(err));
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

export function* userSagas() {
  yield all([call(onSignUpStart), call(onSignInStart), call(onUpdateMeStart)]);
}
