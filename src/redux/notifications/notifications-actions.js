import NotificationsActionTypes from './notifications-types';

export const addMessageNotification = body => ({
  type: NotificationsActionTypes.ADD_MESSAGE_NOTIFICATION,
  payload: body
});
export const removeMessageNotification = id => ({
  type: NotificationsActionTypes.REMOVE_MESSAGE_NOTIFICATION,
  payload: id
});
export const removeMessagesNotification = () => ({
  type: NotificationsActionTypes.REMOVE_MESSAGES_NOTIFICATION
});

// Unread messages
export const fetchUnreadMessagesStart = query => ({
  type: NotificationsActionTypes.FETCH_UNREAD_MESSAGES_START,
  payload: query
});
export const fetchUnreadMessagesSuccess = messages => ({
  type: NotificationsActionTypes.FETCH_UNREAD_MESSAGES_SUCCESS,
  payload: messages
});
export const fetchUnreadMessagesFailure = err => ({
  type: NotificationsActionTypes.FETCH_UNREAD_MESSAGES_FAILURE,
  payload: err
});

export const setOnlineUsers = users => ({
  type: NotificationsActionTypes.SET_ONLINE_USERS,
  payload: users
});

export const videoCallNotification = users => ({
  type: NotificationsActionTypes.SET_VIDEO_CALL_NOTIFICATION,
  payload: users
});
export const videoCallNotificationReset = () => ({
  type: NotificationsActionTypes.RESET_VIDEO_CALL_NOTIFICATION
});
