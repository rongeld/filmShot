import { takeLatest, put, all, call } from 'redux-saga/effects';

import UserApi from 'rest/UserApi';
import UsersActionTypes from './users-types';
import { fetchUsersSuccess, fetchUsersFailure } from './users-actions';

export function* fetchUsers() {
  try {
    const { data } = yield UserApi.getAllUsers();
    yield put(fetchUsersSuccess(data));
  } catch (err) {
    yield put(fetchUsersFailure(err));
  }
}

export function* onFetchUsersStart() {
  yield takeLatest(UsersActionTypes.FETCH_USERS_START, fetchUsers);
}

export function* usersSagas() {
  yield all([call(onFetchUsersStart)]);
}
