import produce from 'immer';
import UserActionTypes from './user-types';

const INITIAL_STATE = {
  currentUser: null,
  user: {
    loading: false,
    data: null
  },
  error: null,
  isLoading: [false, false],
  forgetPasswordLoading: false,
  passwordDropped: false
};

const userReducer = produce((draft = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_LOADING:
      if (action.payload) {
        draft.isLoading[0] = true;
      } else {
        draft.isLoading[1] = true;
      }
      return draft;
    case UserActionTypes.SIGN_IN_SUCCESS:
      draft.currentUser = action.payload;
      draft.forgetPasswordLoading = false;
      draft.error = null;
      draft.isLoading = [false, false];
      return draft;
    case UserActionTypes.UPDATE_ME_SUCCESS:
      draft.currentUser = {
        token: draft.currentUser.token,
        ...action.payload.data
      };
      draft.user.data = action.payload.data;
      draft.isLoading = [false, false];
      return draft;
    case UserActionTypes.SIGN_OUT:
      draft = INITIAL_STATE;
      return draft;
    case UserActionTypes.FORGOT_PASSWORD_START:
    case UserActionTypes.UPDATE_PASSWORD_START:
      draft.forgetPasswordLoading = true;
      return draft;
    case UserActionTypes.FORGOT_PASSWORD_CLEAR:
      draft.forgetPasswordLoading = false;
      draft.passwordDropped = false;
      return draft;
    case UserActionTypes.FORGOT_PASSWORD_SUCCESS:
      draft.forgetPasswordLoading = false;
      draft.passwordDropped = true;
      return draft;
    case UserActionTypes.REMOVE_SINGLE_USER:
      draft.user.data = null;
      draft.user.loading = false;
      return draft;
    case UserActionTypes.GET_SINGLE_USER_SUCCESS:
      draft.user.data = action.payload;
      draft.user.loading = false;
      return draft;
    case UserActionTypes.SIGN_IN_FAILURE:
    case UserActionTypes.SIGN_OUT_FAILURE:
    case UserActionTypes.SIGN_UP_FAILURE:
    case UserActionTypes.GET_SINGLE_USER_FAILURE:
    case UserActionTypes.UPDATE_ME_FAILURE:
    case UserActionTypes.UPDATE_PASSWORD_FAILURE:
    case UserActionTypes.FORGOT_PASSWORD_FAILURE:
      draft.error = action.payload;
      draft.forgetPasswordLoading = false;
      draft.isLoading = [false, false];
      draft.user.loading = false;
      return draft;

    default:
      return draft;
  }
});

export default userReducer;
