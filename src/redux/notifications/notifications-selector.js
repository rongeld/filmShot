import { createSelector } from 'reselect';

const selectNotifications = state => state.notifications;

export const selectMessagesNotifications = createSelector(
  [selectNotifications],
  notifications => notifications.messages
);
export const selectOnlineUsers = createSelector(
  [selectNotifications],
  notifications => notifications.onlineUsers
);
export const selectVideoCallNotification = createSelector(
  [selectNotifications],
  notifications => notifications.videoCall
);
export const selectTotalAmountOfMessage = createSelector(
  [selectMessagesNotifications],
  messages =>
    Object.keys(messages).reduce(
      (res, item) => res + messages[item].numberOfMessages,
      0
    )
);
