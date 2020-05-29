import UserActionTypes from './user-types';

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
