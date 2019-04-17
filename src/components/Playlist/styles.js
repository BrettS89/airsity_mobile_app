import { StyleSheet } from 'react-native';
import Colors from '../../shared/styles/colors';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  playlistContainer: {
    flex: 1,
    paddingHorizontal: 15,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
  },
  // song card
  songCard: {
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 5,
  },
  albumArtContainer: {
    height: 80,
    width: 80,
    borderRadius: 4,
    marginRight: 10,
  },
  albumArt: {
    width: '100%',
    height: '100%',
    borderRadius: 4,
  },
  actionButton: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textContainer: {
    justifyContent: 'center',
    flex: 1,
  },
  title: {
    flexWrap: 'wrap',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
  },
  artist: {
    flexWrap: 'wrap',
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
    backgroundColor: 'rgba(255, 255, 255, 0.87)',
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
