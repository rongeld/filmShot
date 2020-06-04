import { takeLatest, put, all, call } from 'redux-saga/effects';

import MessageApi from 'rest/MessageApi';
import NotificationsActionTypes from './notifications-types';
import {
  fetchUnreadMessagesSuccess,
  fetchUnreadMessagesFailure
} from './notifications-actions';

export function* fetchUnreadMessage({ payload }) {
  try {
    const { data } = yield MessageApi.getDialog(payload);
    yield put(fetchUnreadMessagesSuccess(data));
  } catch (err) {
    yield put(fetchUnreadMessagesFailure(err));
  }
}

export function* onFetchUnreadMessageStart() {
  yield takeLatest(
    NotificationsActionTypes.FETCH_UNREAD_MESSAGES_START,
    fetchUnreadMessage
  );
}

export function* notificationsSagas() {
  yield all([call(onFetchUnreadMessageStart)]);
}
