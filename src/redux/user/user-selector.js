import { createSelector } from 'reselect';

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  user => user.currentUser
);
export const selectSingleUser = createSelector(
  [selectUser],
  user => user.user.data
);
export const selectSingleUserPhotos = createSelector(
  [selectSingleUser],
  data => data.posts
);
export const selectCurrentUserLoading = createSelector(
  [selectUser],
  user => user.isLoading
);
export const selectForgotPasswordLoading = createSelector(
  [selectUser],
  user => user.forgetPasswordLoading
);
export const selectForgotPasswordStatus = createSelector(
  [selectUser],
  user => user.passwordDropped
);
