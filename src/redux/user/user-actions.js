import UserActionTypes from './user-types';

export const setCurrentUser = user => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
});

export const googleSignInStart = () => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_START
});

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
export const signInStart = () => ({
  type: UserActionTypes.SIGN_IN_START
});

export const checkUserSession = () => ({
  type: UserActionTypes.CHECK_USER_ACTION
});

export const signOutStart = () => ({
  type: UserActionTypes.SIGN_OUT_START
});

export const signOutSuccess = () => ({
  type: UserActionTypes.SIGN_OUT_SUCCESS
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
