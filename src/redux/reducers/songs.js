import { SET_SONGS, SET_NEXT_SONG, SET_GENRE, CHANGE_SORT_BY, TOGGLE_SORT_MODAL, CHANGE_SORT_BY_DISPLAY, SET_GENRE_DISPLAY, SET_TRENDING } from '../actions/actionTypes';

const INITIAL_STATE = {
  songs: [{
    title: '  ',
    artist: '  ',
    photo: 'https://torange.biz/photofx/179/10/street-wall-art-house-picture-stylish-abstract-youth-179004.jpg',
    audio: 'https://p.scdn.co/mp3-preview/293edc4384311f86fa6151d3f1a4b4a3af87211b?cid=15cdb78eb98a4db0a7ebc1cef528a214',
  }],
  trending: [],
  genre: { display: 'Hip hop', value: 'hiphop' },
  playlistGenre: { display: 'All genres', value: 'all' },
  sort: { display: 'Popular songs', value: 'popular' },
  openSortModal: false,
};

export default function(state = INITIAL_STATE, { type, payload }) {
  switch(type) {

    case SET_SONGS:
      return {
        ...state,
        songs: payload,
      };

    case SET_NEXT_SONG:
      return {
        ...state,
        songs: payload,
      };

    case SET_GENRE:
      return {
        ...state,
        genre: payload,
      };

    case SET_GENRE_DISPLAY:
      return {
        ...state,
        genre: payload,
      };

    case TOGGLE_SORT_MODAL:
      return {
        ...state,
        openSortModal: payload,
      };

    case CHANGE_SORT_BY:
      return {
        ...state,
        sort: payload,
        openSortModal: false,
      };

    case CHANGE_SORT_BY_DISPLAY:
      return {
        ...state,
        sort: payload,
      };

    case SET_TRENDING:
      return {
        ...state,
        trending: payload,
      };

    default:
      return state;
  }
}
