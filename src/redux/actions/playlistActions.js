import { GET_PLAYLIST, SET_PLAYLIST, GET_PLAYLIST_SCROLL, TOGGLE_PLAYLIST_MODAL, SET_PLAYLIST_GENRE, IS_REFRESHING, SET_REFRESHING, ADD_TO_PLAYLIST, SET_STREAMING_SERVICE_REDUCER, SET_STREAMING_SERVICE } from './actionTypes';

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

export const isRefreshing = () => ({
  type: IS_REFRESHING,
});

export const setRefreshing = payload => ({
  type: SET_REFRESHING,
  payload,
});

export const addToPlaylist = payload => ({
  type: ADD_TO_PLAYLIST,
  payload,
});

export const setStreamingServiceReducer = payload => ({
  type: SET_STREAMING_SERVICE_REDUCER,
  payload,
});

export const setStreamingService = payload => ({
  type: SET_STREAMING_SERVICE,
  payload,
});
