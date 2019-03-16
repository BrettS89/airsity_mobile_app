import { ON_LOGIN, ON_SIGNUP, SET_LOGIN_ERROR, SET_SIGNUP_ERROR } from './actionTypes';

export const onLogin = payload => {
  return {
    type: ON_LOGIN,
    payload,
  };
};

export const onSignup = payload => {
  return {
    type: ON_SIGNUP,
    payload,
  };
};

export const setLoginError = payload => {
  return {
    type: SET_LOGIN_ERROR,
    payload,
  };
};
