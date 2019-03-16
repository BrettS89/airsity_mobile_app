import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: 0,
    alignItems: 'center',
  },
  albumArt: {
    width: '100%',
    aspectRatio: 1/1,
  },
  title: {
    fontSize: 20,
    marginTop: 10,
    marginBottom: 5,
    fontWeight: '600',
  },
  artist: {
    fontSize: 18,
  },
  actions: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  playPause: {
    marginHorizontal: 30,
  },
  pause: {
    marginHorizontal: 23,
  }
});
