import produce from 'immer';
import NotificationsActionTypes from './notifications-types';

const INITIAL_STATE = {
  messages: {},
  onlineUsers: [],
  err: null
};

const notificationsReducer = produce((draft = INITIAL_STATE, action) => {
  switch (action.type) {
    case NotificationsActionTypes.ADD_MESSAGE_NOTIFICATION:
      if (draft.messages[action.payload.from]) {
        draft.messages[action.payload.from].numberOfMessages += 1;
        return draft;
      }
      action.payload.numberOfMessages = 1;
      draft.messages[action.payload.from] = action.payload;
      return draft;
    case NotificationsActionTypes.REMOVE_MESSAGE_NOTIFICATION:
      delete draft.messages[action.payload];
      return draft;
    case NotificationsActionTypes.REMOVE_MESSAGES_NOTIFICATION:
      draft.messages = {};
      return draft;
    case NotificationsActionTypes.SET_ONLINE_USERS:
      draft.onlineUsers = action.payload;
      return draft;
    case NotificationsActionTypes.FETCH_UNREAD_MESSAGES_SUCCESS:
      // eslint-disable-next-line no-case-declarations
      const updatedObject = action.payload.reduce((result, item) => {
        if (result[item.from]) {
          result[item.from].numberOfMessages += 1;
          return result;
        }
        item.numberOfMessages = 1;
        item.senderInfo = item.senderInfo[0];
        result[item.from] = item;
        return result;
      }, {});
      draft.messages = updatedObject;
      return draft;
    default:
      return draft;
  }
});

export default notificationsReducer;
