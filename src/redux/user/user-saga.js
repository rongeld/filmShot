import { takeLatest, put, all, call } from 'redux-saga/effects';

import UserAPI from 'rest/UserApi';
import UserActionTypes from './user-types';
import { signInSuccess, signUpFailure, signInStart } from './user-actions';

export function* signUp({ payload }) {
  yield put(signInStart(true));
  try {
    const {
      data: { token, user }
    } = yield UserAPI.signUp(payload);
    const userToSafe = {
      token,
      ...user
    };
    yield put(signInSuccess({ userToSafe, signIn: false }));
  } catch (err) {
    yield put(signUpFailure(err));
  }
}
export function* signInWithEmail({ payload }) {
  yield put(signInStart(false));
  try {
    const {
      data: { token, user }
    } = yield UserAPI.signIn(payload);
    const userToSafe = {
      token,
      ...user
    };
    yield put(signInSuccess({ userToSafe, signIn: true }));
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

export function* userSagas() {
  yield all([call(onSignUpStart), call(onSignInStart)]);
}
