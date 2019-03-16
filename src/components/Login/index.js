import React from 'react';
import LoginView from './view';

class Login extends React.Component {
  state = {
    email: null,
    password: null,
    loading: false,
  };

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
    return (
      <LoginView
        onTextChange={this.onTextChange}
        onLogin={this.onLogin}
        navigateToSignup={this.navigateToSignup}
      />
    );
  }
}

export default Login;
