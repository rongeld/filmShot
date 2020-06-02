import { all, call } from 'redux-saga/effects';

import { userSagas } from './user/user-saga';
import { postSagas } from './post/post-saga';
import { messageSagas } from './messages/messages-saga';
import { usersSagas } from './users/users-saga';

export default function* rootSaga() {
  yield all([
    call(userSagas),
    call(postSagas),
    call(messageSagas),
    call(usersSagas)
  ]);
}
