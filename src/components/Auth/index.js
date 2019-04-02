import React from 'react';
import { AppLoading } from 'expo';
import { SplashScreen } from 'expo';
import { View, Text, Image, AsyncStorage } from 'react-native';

class Auth extends React.Component {
  componentDidMount() {
    this.props.actions.appLoad();
  }
  
  render() {
    return (
      <AppLoading
        autoHideSplash={true}
      />
    );
  }
}

export default Auth;
