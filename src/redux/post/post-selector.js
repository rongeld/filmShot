import { createSelector } from 'reselect';

const selectPost = state => state.post;

export const selectAllPosts = createSelector([selectPost], post => post.posts);

export const selectPostLoading = createSelector(
  [selectPost],
  post => post.isLoading
);
export const selectPostsFetching = createSelector(
  [selectPost],
  post => post.isFetching
);
