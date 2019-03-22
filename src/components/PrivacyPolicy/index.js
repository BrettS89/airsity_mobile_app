import React from 'react';
import PrivacyPolicyView from './view';

class PrivacyPolicy extends React.Component {

  navigateBack = () => {
    this.props.actions.navigateTo({
      current: this.props.state.navigation.previous, 
      previous: 'PrivacyPolicy'
    });
  };

  render() {
    return (
      <PrivacyPolicyView navigateBack={this.navigateBack} />
    )
  }
}

export default PrivacyPolicy;
