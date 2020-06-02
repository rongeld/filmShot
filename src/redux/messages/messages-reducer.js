import produce from 'immer';
import MessagesActionTypes from './messages-types';

const INITIAL_STATE = {
  conversations: {
    data: [],
    isLoading: false
  },
  personalMessages: {
    data: [],
    coSpeaker: null,
    isLoading: false
  },
  err: null
};

const messageReducer = produce((draft = INITIAL_STATE, action) => {
  switch (action.type) {
    case MessagesActionTypes.GET_CONVERSATIONS_START:
      draft.conversations.isLoading = true;
      return draft;
    case MessagesActionTypes.GET_CONVERSATIONS_SUCCESS:
      draft.conversations.isLoading = false;
      draft.conversations.data = action.payload;
      return draft;
    case MessagesActionTypes.FETCH_DIALOG_START:
      draft.personalMessages.isLoading = true;
      return draft;
    case MessagesActionTypes.FETCH_DIALOG_SUCCESS:
      draft.personalMessages.isLoading = false;
      draft.personalMessages.data = action.payload;
      return draft;
    case MessagesActionTypes.SET_CO_SPEAKER:
      draft.personalMessages.coSpeaker = action.payload;
      return draft;
    case MessagesActionTypes.REMOVE_CO_SPEAKER:
      draft.personalMessages.coSpeaker = null;
      return draft;
    case MessagesActionTypes.ADD_MESSAGE_SOCKET:
      draft.personalMessages.data.push(action.payload);
      return draft;
    case MessagesActionTypes.GET_CONVERSATIONS_FAILURE:
    case MessagesActionTypes.FETCH_DIALOG_FAILURE:
    case MessagesActionTypes.SEND_MESSAGE_FAILURE:
      draft.conversations.isLoading = false;
      draft.personalMessages.isLoading = false;
      draft.error = action.payload;
      return draft;
    default:
      return draft;
  }
});

export default messageReducer;
