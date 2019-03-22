import PrivacyPolicy from '../components/PrivacyPolicy';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as navigationActions from '../redux/actions/navigationActions';

const mapStateToProps = state => ({
  state: {
    navigation: state.navigation,
  },
});

const mapDispatchToProps = dispatch => {
  const allActions = {
    ...navigationActions,
  };
  
  return {
    actions: bindActionCreators(allActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PrivacyPolicy);
