import { SET_PLAYLIST, TOGGLE_PLAYLIST_MODAL, SET_PLAYLIST_GENRE } from '../actions/actionTypes';

const INITIAL_STATE = {
  songs: [],
  genre: { display: 'All genres', value: 'all' },
  modal: false,
};

export default function(state = INITIAL_STATE, { type, payload }) {
  switch(type) {

    case SET_PLAYLIST:
      return {
        ...state,
        songs: payload,
      };

    case TOGGLE_PLAYLIST_MODAL:
      return {
        ...state,
        modal: !state.modal,
      };

    case SET_PLAYLIST_GENRE:
      return {
        ...state,
        genre: payload,
      };

    default:
      return state;
  }
}
