import { GET_PLAYLIST, SET_PLAYLIST, GET_PLAYLIST_SCROLL, TOGGLE_PLAYLIST_MODAL, SET_PLAYLIST_GENRE } from './actionTypes';

export const getPlaylist = () => ({
  type: GET_PLAYLIST,
});

export const getPlaylistScroll = () => ({
  type: GET_PLAYLIST_SCROLL,
});

export const setPlaylist = payload => ({
  type: SET_PLAYLIST,
  payload,
});

export const togglePlaylistModal = () => ({
  type: TOGGLE_PLAYLIST_MODAL,
});

export const setPlaylistGenre = payload => ({
  type: SET_PLAYLIST_GENRE,
  payload,
});
