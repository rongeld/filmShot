import produce from 'immer';
import UsersActionTypes from './users-types';

const INITIAL_STATE = {
  users: {
    data: [],
    isLoading: false
  },
  err: null
};

const usersReducer = produce((draft = INITIAL_STATE, action) => {
  switch (action.type) {
    case UsersActionTypes.FETCH_USERS_START:
      draft.users.isLoading = true;
      return draft;
    case UsersActionTypes.FETCH_USERS_SUCCESS:
      draft.users.isLoading = false;
      draft.users.data = action.payload;
      draft.err = null;
      return draft;
    case UsersActionTypes.FETCH_USERS_FAILURE:
      draft.users.isLoading = false;
      draft.err = action.payload;
      return draft;
    default:
      return draft;
  }
});

export default usersReducer;
