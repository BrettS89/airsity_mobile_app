import { StyleSheet } from 'react-native';
import Colors from '../../shared/styles/colors';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  header: {
    marginTop: 30,
    fontSize: 20,
    fontWeight: '600',
  },
  buttonsContainer: {
    marginTop: 50,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 220,
    height: 50,
    borderRadius: 50,
    borderWidth: 3,
    marginVertical: 7
  },
  buttonText: {
    fontWeight: '600',
  },
});
