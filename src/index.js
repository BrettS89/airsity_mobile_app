import React from 'react';
import { Audio } from 'expo';
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
  render () {
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
