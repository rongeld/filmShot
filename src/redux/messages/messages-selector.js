import { createSelector } from 'reselect';

const selectMessages = state => state.messages;

export const selectConversations = createSelector(
  [selectMessages],
  messages => messages.conversations
);

export const selectConversationsData = createSelector(
  [selectConversations],
  conversation => conversation.data
);
export const selectConversationsStatus = createSelector(
  [selectConversations],
  conversation => conversation.isLoading
);
export const selectDialog = createSelector(
  [selectMessages],
  messages => messages.personalMessages
);
export const selectDialogData = createSelector(
  [selectDialog],
  dialog => dialog.data
);
export const selectDialogCoSpeaker = createSelector(
  [selectDialog],
  dialog => dialog.coSpeaker
);
export const selectDialogStatus = createSelector(
  [selectDialog],
  dialog => dialog.isLoading
);
