import { SET_LOADING, SET_NOT_LOADING } from '../actions/actionTypes';

const INITIAL_STATE = {
  loading: false,
};

export default function(state = INITIAL_STATE, { type, payload }) {
  switch (type) {

    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    case SET_NOT_LOADING:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}
