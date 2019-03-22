import React from 'react';
import AccountView from './view';

class Account extends React.Component {
  state = {
    modalOpen: false,
  };

  navigateTo = screen => {
    this.props.actions.navigateTo({ current: screen, previous: 'Account' });
  };

  logout = () => {
    this.props.actions.logout();
  };

  toggleModal = status => {
    this.setState({ modalOpen: status });
  };

  render() {
    return (
      <AccountView
        navigateTo={this.navigateTo}
        logout={this.logout}
        toggleModal={this.toggleModal}
        modalOpen={this.state.modalOpen}
      />
    );
  }
}

export default Account;
