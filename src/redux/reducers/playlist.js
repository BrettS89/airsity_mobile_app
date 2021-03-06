import { SET_PLAYLIST, TOGGLE_PLAYLIST_MODAL, SET_PLAYLIST_GENRE, SET_REFRESHING, ADD_TO_PLAYLIST } from '../actions/actionTypes';

const INITIAL_STATE = {
  songs: [],
  genre: { display: 'All genres', value: 'all' },
  modal: false,
  isRefreshing: false,
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

    case SET_REFRESHING:
      return {
        ...state,
        isReFreshing: payload,
      };

    case ADD_TO_PLAYLIST:
      return {
        ...state,
        songs: [payload, ...state.songs],
      };

    default:
      return state;
  }
}
