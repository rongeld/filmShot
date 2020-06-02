import { takeLatest, put, all, call } from 'redux-saga/effects';

import MessageApi from 'rest/MessageApi';
import MessagesActionTypes from './messages-types';
import {
  getConversationsSuccess,
  getConversationsFailure,
  fetchDialogSuccess,
  fetchDialogFailure,
  sendMessageSuccess,
  sendMessageFailure
} from './messages-actions';

export function* getConversations() {
  try {
    const { data } = yield MessageApi.getConversations();
    yield put(getConversationsSuccess(data));
  } catch (err) {
    yield put(getConversationsFailure(err));
  }
}
export function* fetchDialog({ payload }) {
  try {
    const { data } = yield MessageApi.getDialog(payload);
    yield put(fetchDialogSuccess(data));
  } catch (err) {
    yield put(fetchDialogFailure(err));
  }
}
export function* sendMessage({ payload }) {
  try {
    yield MessageApi.sendMessage(payload);
    yield put(sendMessageSuccess());
  } catch (err) {
    yield put(sendMessageFailure(err));
  }
}

export function* onGetConversationStart() {
  yield takeLatest(
    MessagesActionTypes.GET_CONVERSATIONS_START,
    getConversations
  );
}
export function* onFetchDialogStart() {
  yield takeLatest(MessagesActionTypes.FETCH_DIALOG_START, fetchDialog);
}
export function* onSendMessageStart() {
  yield takeLatest(MessagesActionTypes.SEND_MESSAGE_START, sendMessage);
}

export function* messageSagas() {
  yield all([
    call(onGetConversationStart),
    call(onFetchDialogStart),
    call(onSendMessageStart)
  ]);
}
