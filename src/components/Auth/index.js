import React from 'react';
import { AppLoading } from 'expo';

class Auth extends React.Component {
  componentDidMount() {
    this.props.actions.appLoad();
  }
  
  render() {
    return (
      <AppLoading />
    );
  }
}

export default Auth;
