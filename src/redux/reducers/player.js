import { SET_PLAYING, SET_PAUSED } from '../actions/actionTypes';

const INITIAL_STATE = {
  playing: false,
};

export default function(state = INITIAL_STATE, { type, payload }) {
  switch(type) {

    case SET_PLAYING:
      return {
        ...state,
        playing: true,
      };

    case SET_PAUSED:
      return {
        ...state,
        playing: false,
      };

    default:
      return state;
  }
}
