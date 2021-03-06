import UserActionTypes from './user-types';
import { ErrorMessage } from 'react-hook-form';

export const signInSuccess = user => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user
});

export const signInFailure = errorMessage => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: errorMessage
});

export const emailSignInStart = emailAndPassword => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword
});

export const busyStart = isSignIn => ({
  type: UserActionTypes.SET_LOADING,
  payload: isSignIn
});

export const updateMeStart = data => ({
  type: UserActionTypes.UPDATE_ME_START,
  payload: data
});
export const updateMeSuccess = data => ({
  type: UserActionTypes.UPDATE_ME_SUCCESS,
  payload: data
});
export const updateMeFailure = err => ({
  type: UserActionTypes.UPDATE_ME_FAILURE,
  payload: err
});

export const signOutStart = () => ({
  type: UserActionTypes.SIGN_OUT_START
});

export const signOut = () => ({
  type: UserActionTypes.SIGN_OUT
});

export const signOutFailure = err => ({
  type: UserActionTypes.SIGN_OUT_FAILURE,
  payload: err
});

export const signUpStart = userData => ({
  type: UserActionTypes.SIGN_UP_START,
  payload: userData
});

export const signUpSuccess = ({ user, additionalData }) => ({
  type: UserActionTypes.SIGN_UP_SUCCESS,
  payload: { user, additionalData }
});

export const signUpFailure = err => ({
  type: UserActionTypes.SIGN_UP_FAILURE,
  payload: err
});

// get single user
export const getSingleUserStart = id => ({
  type: UserActionTypes.GET_SINGLE_USER_START,
  payload: id
});
export const removeSingleUser = () => ({
  type: UserActionTypes.REMOVE_SINGLE_USER
});
export const getSingleUserSuccess = user => ({
  type: UserActionTypes.GET_SINGLE_USER_SUCCESS,
  payload: user
});
export const getSingleUserFailure = err => ({
  type: UserActionTypes.GET_SINGLE_USER_FAILURE,
  payload: err
});

export const forgotPasswordStart = email => ({
  type: UserActionTypes.FORGOT_PASSWORD_START,
  payload: email
});
export const forgotPasswordSuccess = () => ({
  type: UserActionTypes.FORGOT_PASSWORD_SUCCESS
});
export const forgotPasswordError = err => ({
  type: UserActionTypes.FORGOT_PASSWORD_FAILURE,
  payload: err
});
export const forgotPasswordClear = () => ({
  type: UserActionTypes.FORGOT_PASSWORD_CLEAR
});

export const updatePasswordStart = data => ({
  type: UserActionTypes.UPDATE_PASSWORD_START,
  payload: data
});
export const updatePasswordSuccess = user => ({
  type: UserActionTypes.UPDATE_PASSWORD_SUCCESS,
  payload: user
});
export const updatePasswordFailure = err => ({
  type: UserActionTypes.UPDATE_PASSWORD_FAILURE,
  payload: err
});
