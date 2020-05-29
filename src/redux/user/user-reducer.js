import produce from 'immer';
import UserActionTypes from './user-types';

const INITIAL_STATE = {
  currentUser: null,
  error: null,
  isLoading: [false, false]
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
      return {
        currentUser: action.payload,
        error: null,
        isLoading: [false, false]
      };
    case UserActionTypes.UPDATE_ME_SUCCESS:
      draft.currentUser = {
        token: draft.currentUser.token,
        ...action.payload.data
      };
      draft.isLoading = [false, false];
      return draft;
    case UserActionTypes.SIGN_OUT:
      return {
        currentUser: null,
        error: null,
        isLoading: [false, false]
      };
    case UserActionTypes.SIGN_IN_FAILURE:
    case UserActionTypes.SIGN_OUT_FAILURE:
    case UserActionTypes.SIGN_UP_FAILURE:
      draft.error = action.payload;
      draft.isLoading = [false, false];
      return draft;

    default:
      return draft;
  }
});

export default userReducer;
