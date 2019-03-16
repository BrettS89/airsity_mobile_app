import React from 'react';
import SignupView from './view';
import { getIsoDate } from '../../utilities/misc';

class Signup extends React.Component {
  state = {
    firstName: null,
    email: null,
    password: null,
    loading: false,
  };

  onTextChange = (data, type) => {
    if (type === 'firstName') {
      this.setState({ firstName: data });
    } else if (type === 'email') {
      this.setState({ email: data });
    } else if (type === 'password') {
      this.setState({ password: data });
    }
  };

  onSignup = () => {
    const { firstName, email, password } = this.state;
    const date = Date.now();
    const isoDate = getIsoDate();
    this.props.actions.onSignup({ date, isoDate, firstName, email, password });
  };

  render() {
    return (
      <SignupView
        onTextChange={this.onTextChange}
        onSignup={this.onSignup}
      />
    );
  }
}

export default Signup;
