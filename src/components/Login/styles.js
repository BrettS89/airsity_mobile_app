import { StyleSheet } from 'react-native';
import Colors from '../../shared/styles/colors';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  loginFormContainer: {
    width: 350,
    height: '100%',
    justifyContent: 'center',
    borderRadius: 3,
    padding: 50,
    backgroundColor: '#ffffff',
    borderColor: '#eaeaea',
  },
  logoContainer: {
    alignItems: 'center'
  },
  logo: {
    fontSize: 30,
    marginTop: 15,
    fontWeight: '500'
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center', 
    alignItems: 'center',
    // backgroundColor: Colors.secondary,
    borderWidth: 3,
    borderColor: Colors.main,
    borderRadius: 50,
    height: 45
  },
  facebookButton: {
    flexDirection: 'row',
    justifyContent: 'center', 
    alignItems: 'center',
    // backgroundColor: Colors.secondary,
    borderWidth: 3,
    borderColor: Colors.secondary,
    borderRadius: 50,
    height: 45,
  },
  buttonText: {
    color: Colors.main,
    fontWeight: '600',
    fontSize: 15,
  },
  facebookText: {
    color: Colors.secondary,
    fontWeight: '600',
    fontSize: 15,
    marginLeft: 6,
  },
  tcContainer: {
    flexDirection:'row',
    marginTop: 35,
  },
  tcText: {
    color: 'gray',
    fontSize: 11,
  },
  tcText2: {
    color: 'gray',
    fontSize: 11,
    fontWeight: '700',
  }
});
