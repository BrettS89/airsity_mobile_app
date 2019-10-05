import React from 'react';
import { SplashScreen, Notifications } from 'expo';
import { Audio } from 'expo-av';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import store from './redux';
import NavigationService from './utilities/navigation';
import AppNav from './navigation';
import LoadingModal from './shared/components/Loading';

export const soundObject1 = new Audio.Sound();
export const soundObject2 = new Audio.Sound();
export const playlistSoundObject = new Audio.Sound();

class AppContainer extends React.Component {
  constructor(props) {
    super(props);

    SplashScreen.preventAutoHide();
  }

  async componentDidMount() {
    Notifications.addListener(this.listen);
  }

  listen = ({ origin, data }) => {
    console.log(origin, data);
  };

  playInSilentMode = async () => {
    try {
      await Audio.setAudioModeAsync({ 
        playsInSilentModeIOS: true,
        staysActiveInBackground: true,
        allowsRecordingIOS: false,
        interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
        shouldDuckAndroid: false,
        interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
        playThroughEarpieceAndroid: false,
      });
    } catch(e) {
      console.log('set play in silent mode error: ', e);
    }
  };

  render () {
    this.playInSilentMode();
    return (
      <Provider store={store()}>
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
          <AppNav
            ref={(navigatorRef) => {
              NavigationService.setTopLevelNavigator(navigatorRef);
            }}
          />
          <LoadingModal />
        </View>
      </Provider>
    )
  }
}

export default AppContainer;
