import { StyleSheet } from 'react-native';
import Colors from '../../shared/styles/colors';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    padding: 15,
  },
  header: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 20
  },
  buttonsContainer: {
    width: '100%',
    alignItems: 'center',
  },
  accountButton: {
    width: '80%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: Colors.main,
    borderRadius: 100,
    marginVertical: 8,
  },
  accountText: {
    fontWeight: '600',
    fontSize: 15,
  },
  modalContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center'
  },
  modalContentContainer: {
    width: '70%',
    backgroundColor: '#fff',
    padding: 20,
    paddingBottom: 40,
    justifyContent: 'center',
    borderRadius: 10,
  },
  modalClose: {
    position: 'relative',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
});
