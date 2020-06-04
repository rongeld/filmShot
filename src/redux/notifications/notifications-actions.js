import NotificationsActionTypes from './notifications-types';

export const addMessageNotification = body => ({
  type: NotificationsActionTypes.ADD_MESSAGE_NOTIFICATION,
  payload: body
});
export const removeMessageNotification = body => ({
  type: NotificationsActionTypes.REMOVE_MESSAGE_NOTIFICATION,
  payload: body
});
export const removeMessagesNotification = () => ({
  type: NotificationsActionTypes.REMOVE_MESSAGES_NOTIFICATION
});
