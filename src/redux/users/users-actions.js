import UsersActionTypes from './users-types';

export const fetchUsersStart = () => ({
  type: UsersActionTypes.FETCH_USERS_START
});
export const fetchUsersSuccess = users => ({
  type: UsersActionTypes.FETCH_USERS_SUCCESS,
  payload: users
});
export const fetchUsersFailure = err => ({
  type: UsersActionTypes.FETCH_USERS_FAILURE,
  payload: err
});
