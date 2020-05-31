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
