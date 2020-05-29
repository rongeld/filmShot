import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './user/user-reducer';
import modalReducer from './modal/modal-reducer';
import postReducer from './post/post-reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user']
};

const rootReducer = combineReducers({
  user: userReducer,
  modal: modalReducer,
  post: postReducer
});

export default persistReducer(persistConfig, rootReducer);
