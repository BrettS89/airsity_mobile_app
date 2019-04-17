import { StyleSheet } from 'react-native';
import Colors from '../../shared/styles/colors';

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
  },
  // playlist modal
  modalContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center'
  },
  modalContentContainer: {
    width: '70%',
    backgroundColor: 'rgba(255, 255, 255, 0.86)',
    padding: 20,
    paddingBottom: 40,
    justifyContent: 'center',
    borderRadius: 20,
  },
  modalClose: {
    position: 'relative',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  modalButtons: {
    width: '90%',
    marginTop: 15,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '600',
  },
  modalButton: {
    width: '100%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: Colors.main,
    borderRadius: 100,
    marginVertical: 6,
  },
  modalText: {
    fontWeight: '600',
    fontSize: 15,
  }
});
