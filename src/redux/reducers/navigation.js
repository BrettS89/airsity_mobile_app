import { SET_NAVIGATION } from '../actions/navigationActions';

const INITIAL_STATE = {
  previous: null,
  current: null,
};

export default function(state = INITIAL_STATE, { type, payload }) {
  switch(type) {

    case SET_NAVIGATION:
      return {
        ...state,
        ...payload,
      };

    default:
      return state;
  }
}
