import { SET_LOGIN_ERROR, SET_SIGNUP_ERROR, SET_LOGIN_LOADING, SET_SIGNUP_LOADING } from '../actions/actionTypes';

const INITIAL_STATE = {
  loginError: false,
  signupError: false,
  isLoggedIn: false,
  loginLoading: false,
  signupLoading: false,
};

export default function(state = INITIAL_STATE, { type, payload }) {
  switch(type) {

    case SET_LOGIN_ERROR:
      return {
        ...state,
        loginError: payload,
      };

    case SET_SIGNUP_ERROR:
      return {
        ...state,
        signupError: payload,
      };

    case SET_LOGIN_LOADING:
      return {
        ...state,
        loginLoading: payload,
      };

    case SET_SIGNUP_LOADING:
      return {
        ...state,
        signupLoading: payload,
      };

    default:
      return state;
  }
}
