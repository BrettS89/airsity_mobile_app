import { GET_SONGS, SET_SONGS, NEXT_SONG, SET_GENRE } from './actionTypes';

export const getSongs = payload => ({
  type: GET_SONGS,
  payload,
});

export const setSongs = payload => ({
  type: SET_SONGS,
  payload,
});

export const nextSong = payload => ({
  type: NEXT_SONG,
  payload,
});

export const setGenre = payload => ({
  type: SET_GENRE,
  payload,
});
