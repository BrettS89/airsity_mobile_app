import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as navigationActions from '../../redux/actions/navigationActions';
import LegalDocsView from './view';

class LegalDocs extends React.Component {

  navigateTo = screen => {
    this.props.actions.navigateTo({ current: screen, previous: 'LegalDocs' });
  };

  render() {
    return (
      <LegalDocsView navigateTo={this.navigateTo} />
    );
  }
}

const mapDispatchToProps = dispatch => {
  const allActions = {
    ...navigationActions,
  };

  return {
    actions: bindActionCreators(allActions, dispatch),
  };
}

export default connect(null, mapDispatchToProps)(LegalDocs);
