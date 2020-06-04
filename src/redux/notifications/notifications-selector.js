import { createSelector } from 'reselect';

const selectNotifications = state => state.notifications;

export const selectMessagesNotifications = createSelector(
  [selectNotifications],
  notifications => notifications.messages
);
export const selectTotalAmountOfMessage = createSelector(
  [selectMessagesNotifications],
  messages => messages.reduce((res, item) => res + item.numberOfMessages, 0)
);
