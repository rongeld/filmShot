import { takeLatest, put, all, call } from 'redux-saga/effects';

import UserAPI from 'rest/UserApi';
import UserActionTypes from './user-types';
import { signInSuccess, signUpFailure, signInStart } from './user-actions';

export function* signUp({ payload }) {
  yield put(signInStart());
  try {
    const {
      data: { token, user }
    } = yield UserAPI.signUp(payload);
    const userToSafe = {
      token,
      name: user.name,
      email: user.email,
      role: user.role
    };
    yield put(signInSuccess(userToSafe));
  } catch (err) {
    yield put(signUpFailure(err));
  }
}
export function* onSignUpStart() {
  yield takeLatest(UserActionTypes.SIGN_UP_START, signUp);
}

export function* userSagas() {
  yield all([call(onSignUpStart)]);
}
