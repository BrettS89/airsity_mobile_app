import React from 'react';
import { SplashScreen } from 'expo';
import LoginView from './view';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: null,
      password: null,
      loading: false,
    };
  }

  onTextChange = (data, type) => {
    if (type === 'email') {
      this.setState({ email: data });
    } else if (type === 'password') {
      this.setState({ password: data });
    }
  };

  onLogin = () => {
    const { email, password } = this.state;
    this.props.actions.onLogin({ email, password });
  };

  navigateToSignup = () => {
    this.props.actions.navigateTo({ current: 'Signup', previous: 'Login' });
  }

  render() {
    SplashScreen.hide();
    return (
      <LoginView
        onTextChange={this.onTextChange}
        onLogin={this.onLogin}
        navigateToSignup={this.navigateToSignup}
        navigateTo={() => this.props.navigation.navigate('LegalDocs')}
        error={this.props.state.auth.loginError}
        loading={this.props.state.auth.loginLoading}
        facebookAuth={this.props.actions.facebookAuth}
        facebookLoading={this.props.state.auth.facebookLoading}
      />
    );
  }
}

export default Login;
