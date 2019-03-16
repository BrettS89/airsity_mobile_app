import { SET_LOGIN_ERROR } from '../actions/actionTypes';

const INITIAL_STATE = {
  loginError: null,
  signupError: null,
  isLoggedIn: false,
};

export default function(state = INITIAL_STATE, { type, payload }) {
  switch(type) {

    case SET_LOGIN_ERROR:
      return {
        ...state,
        loginError: payload,
      };

    default:
      return state;
  }
}
