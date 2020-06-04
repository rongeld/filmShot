import produce from 'immer';
import NotificationsActionTypes from './notifications-types';

const INITIAL_STATE = {
  messages: [],
  err: null
};

const notificationsReducer = produce((draft = INITIAL_STATE, action) => {
  switch (action.type) {
    case NotificationsActionTypes.ADD_MESSAGE_NOTIFICATION:
      let isIn = false;
      draft.messages.forEach(item => {
        if (item.from === action.payload.from) {
          item.numberOfMessages += 1;
          isIn = true;
        }
      });
      if (!isIn) {
        action.payload.numberOfMessages = 1;
        draft.messages.push(action.payload);
      }
      return draft;
    case NotificationsActionTypes.REMOVE_MESSAGE_NOTIFICATION:
      draft.messages = draft.messages.filter(
        item => item.id !== action.payload
      );
      return draft;
    case NotificationsActionTypes.REMOVE_MESSAGES_NOTIFICATION:
      draft.messages = [];
      return draft;
    default:
      return draft;
  }
});

export default notificationsReducer;
