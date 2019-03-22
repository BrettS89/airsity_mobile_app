import { StyleSheet } from 'react-native';
import Colors from '../../shared/styles/colors';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  backButton: {
    color: Colors.secondary,
  },
  title: {
    fontWeight: '600',
    fontSize: 16,
  },
  sides: {
    width: 100,
  },
  side2: {
    width: 100,
    color: '#fff',
  },
  segment: {
    marginBottom: 15,
  },
  subHeader: {
    fontWeight: '700',
    marginBottom: 15,
  }
});
