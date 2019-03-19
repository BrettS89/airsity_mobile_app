import { SET_PLAYING, SET_PAUSED, PLAYLIST_IS_PLAYING, PLAYLIST_IS_PAUSED } from '../actions/actionTypes';

const INITIAL_STATE = {
  playing: false,
  playlistPlaying: false,
};

export default function(state = INITIAL_STATE, { type, payload }) {
  switch(type) {

    case SET_PLAYING:
      return {
        ...state,
        playing: true,
        playlistPlaying: false,
      };

    case SET_PAUSED:
      return {
        ...state,
        playing: false,
      };

    case PLAYLIST_IS_PLAYING:
      return {
        ...state,
        playlistPlaying: true,
        playing: false,
      };

    case PLAYLIST_IS_PAUSED:
      return {
        ...state,
        playlistPlaying: false,
      };

    default:
      return state;
  }
}
