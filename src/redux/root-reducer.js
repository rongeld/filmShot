import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './user/user-reducer';
import modalReducer from './modal/modal-reducer';
import postReducer from './post/post-reducer';
import messagesReducer from './messages/messages-reducer';
import usersReducer from './users/users-reducer';
import notificationsReducer from './notifications/notifications-reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user', 'notifications']
};

const rootReducer = combineReducers({
  user: userReducer,
  modal: modalReducer,
  post: postReducer,
  messages: messagesReducer,
  users: usersReducer,
  notifications: notificationsReducer
});

export default persistReducer(persistConfig, rootReducer);
