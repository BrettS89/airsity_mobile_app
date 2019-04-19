import React from 'react';
import { SplashScreen } from 'expo';
import SetStreamServiceView from './view';

class SetStreamService extends React.Component {
  render() {
    SplashScreen.hide();
    return (
      <SetStreamServiceView
        setStreamingService={this.props.actions.setStreamingService}
      />
    )
  }
}

export default SetStreamService;
