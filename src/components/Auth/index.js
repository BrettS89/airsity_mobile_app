import React from 'react';
import { AppLoading } from 'expo';
import { View, Image, AsyncStorage } from 'react-native';


class Auth extends React.Component {
  state = {
    isReady: false,
  };

  async componentDidMount() {
    try {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        return this.props.navigation.navigate('Main');
      }
      this.props.navigation.navigate('Login');
    } catch(e) {
      this.props.navigation.navigate('Login');
    }
  }
  
  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          // startAsync={this._cacheResourcesAsync}
          // onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image resizeMode="contain" style={{ width: '100%', height: '100%' }} source={require('../../../assets/images/airsity_splash.png')} />
      </View>
    )
  }
}

export default Auth;
