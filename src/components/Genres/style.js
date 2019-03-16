import { StyleSheet } from 'react-native';
import Colors from '../../shared/styles/colors';

export default StyleSheet.create({
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
  genreButton: {
    width: '80%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: Colors.main,
    borderRadius: 100,
    marginVertical: 8,
  },
  genreText: {
    fontWeight: '600',
    fontSize: 15,
  }
});
