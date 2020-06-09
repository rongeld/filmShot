import produce from 'immer';
import PostActionTypes from './post-types';

const INITIAL_STATE = {
  posts: null,
  error: null,
  isLoading: false,
  isFetching: false,
  isPostingComment: false,
  isLiking: false
};

const postReducer = produce((draft = INITIAL_STATE, action) => {
  switch (action.type) {
    case PostActionTypes.CREATE_POST_BUSY:
      draft.isLoading = action.payload;
      return draft;
    case PostActionTypes.FETCH_POSTS_START:
      draft.isFetching = true;
      return draft;
    case PostActionTypes.CREATE_POST_COMMENT_START:
      draft.isPostingComment = true;
      return draft;
    case PostActionTypes.FETCH_POSTS_SUCCESS:
      draft.posts = action.payload;
      draft.isFetching = false;
      return draft;
    case PostActionTypes.CREATE_POST_COMMENT_SUCCESS:
      draft.posts.forEach(item => {
        if (item.id === action.payload.post) {
          item.comments.push(action.payload);
        }
      });
      draft.isPostingComment = false;
      return draft;
    case PostActionTypes.CREATE_POST_SUCCESS:
      draft.error = null;
      draft.isLoading = false;
      return draft;
    case PostActionTypes.POST_LIKE_UNLIKE_START:
      draft.isLiking = true;
      return draft;
    case PostActionTypes.POST_LIKE_UNLIKE_SUCCESS:
      const removeIndex = draft.posts
        .map(item => item.id)
        .indexOf(action.payload.id);
      draft.posts[removeIndex].likes = action.payload.likes;
      draft.isLiking = false;
      return draft;
    case PostActionTypes.CREATE_POST_FAILURE:
    case PostActionTypes.DELETE_POST_FAILURE:
    case PostActionTypes.FETCH_POSTS_FAILURE:
    case PostActionTypes.POST_LIKE_UNLIKE_FAILURE:
    case PostActionTypes.CREATE_POST_COMMENT_FAILURE:
      draft.isLoading = false;
      draft.isFetching = false;
      draft.isPostingComment = false;
      draft.error = action.payload;
      draft.isLiking = false;
      return draft;
    default:
      return draft;
  }
});

export default postReducer;
