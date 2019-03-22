import React from 'react';
import TermsAndConditionsView from './view';

class TermsAndConditions extends React.Component {

  navigateBack = () => {
    this.props.actions.navigateTo({
      current: this.props.state.navigation.previous, 
      previous: 'TermsAndConditions',
    });
  };

  render() {
    return (
      <TermsAndConditionsView navigateBack={this.navigateBack} />
    );
  }
}

export default TermsAndConditions;
