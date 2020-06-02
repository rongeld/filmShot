import MessagesActionTypes from './messages-types';

export const getConversationsStart = () => ({
  type: MessagesActionTypes.GET_CONVERSATIONS_START
});
export const getConversationsSuccess = conversations => ({
  type: MessagesActionTypes.GET_CONVERSATIONS_SUCCESS,
  payload: conversations
});
export const getConversationsFailure = err => ({
  type: MessagesActionTypes.GET_CONVERSATIONS_FAILURE,
  payload: err
});

export const fetchDialogStart = id => ({
  type: MessagesActionTypes.FETCH_DIALOG_START,
  payload: id
});
export const fetchDialogSuccess = dialog => ({
  type: MessagesActionTypes.FETCH_DIALOG_SUCCESS,
  payload: dialog
});
export const fetchDialogFailure = err => ({
  type: MessagesActionTypes.FETCH_DIALOG_FAILURE,
  payload: err
});

export const sendMessageStart = body => ({
  type: MessagesActionTypes.SEND_MESSAGE_START,
  payload: body
});
export const sendMessageSuccess = () => ({
  type: MessagesActionTypes.SEND_MESSAGE_SUCCESS
});
export const sendMessageFailure = err => ({
  type: MessagesActionTypes.SEND_MESSAGE_FAILURE,
  payload: err
});

export const addMessageSocket = body => ({
  type: MessagesActionTypes.ADD_MESSAGE_SOCKET,
  payload: body
});

export const setCoSpeakerData = body => ({
  type: MessagesActionTypes.SET_CO_SPEAKER,
  payload: body
});
export const removeCoSpeaker = () => ({
  type: MessagesActionTypes.REMOVE_CO_SPEAKER
});
