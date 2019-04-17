export const getSongsSelector = state => state.songs.songs;
export const getTrackSelector = state => state.player.track;
export const getGenre = state => state.songs.genre;
export const getPlaylistGenre = state => state.playlist.genre;
export const getPlaylist = state => state.playlist.songs;
export const getSort = state => state.songs.sort;
