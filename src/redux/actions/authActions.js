import { ON_LOGIN, ON_SIGNUP, SET_LOGIN_ERROR, SET_SIGNUP_ERROR, LOGOUT, SET_LOGIN_LOADING, SET_SIGNUP_LOADING, FACEBOOK_AUTH, SET_FACEBOOK_LOADING } from './actionTypes';

export const onLogin = payload => ({
  type: ON_LOGIN,
  payload,
});

export const onSignup = payload => ({
  type: ON_SIGNUP,
  payload,
});

export const facebookAuth = payload => ({
  type: FACEBOOK_AUTH,
  payload,
});

export const setLoginError = payload => ({
  type: SET_LOGIN_ERROR,
  payload,
});

export const setSignupError = payload => ({
  type: SET_SIGNUP_ERROR,
  payload,
});

export const logout = () => ({
  type: LOGOUT,
});

export const setLoginLoading = payload => ({
  type: SET_LOGIN_LOADING,
  payload
});

export const setSignupLoading = payload => ({
  type: SET_SIGNUP_LOADING,
  payload,
});

export const setFacebookLoading = payload => ({
  type: SET_FACEBOOK_LOADING,
  payload,
});

export const resetStore = () => ({
  type: 'RESET',
});
