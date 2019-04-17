import { GET_SONGS, SET_SONGS, NEXT_SONG, SET_GENRE, SET_GENRE_DISPLAY, CHANGE_SORT_BY, TOGGLE_SORT_MODAL, CHANGE_SORT_BY_DISPLAY } from './actionTypes';

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

export const setGenreDisplay = payload => ({
  type: SET_GENRE_DISPLAY,
  payload,
});

export const toggleSortModal = payload => ({
  type: TOGGLE_SORT_MODAL,
  payload,
})

export const changeSortBy = payload => ({
  type: CHANGE_SORT_BY,
  payload,
});

export const changeSortByDisplay = payload => ({
  type: CHANGE_SORT_BY_DISPLAY,
  payload,
});
