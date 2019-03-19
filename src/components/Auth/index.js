import React from 'react';
import { AppLoading } from 'expo';
import { SplashScreen } from 'expo';
import { View, Text, Image, AsyncStorage } from 'react-native';

class Auth extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.actions.appLoad();
  }
  
  render() {
    SplashScreen.preventAutoHide();
    return (
      <AppLoading
        autoHideSplash={true}
      />
    );
  }
}

export default Auth;
