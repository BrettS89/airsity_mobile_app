import Signup from '../components/Signup';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authActions from '../redux/actions/authActions';

function mapDispatchToProps(dispatch) {
  const allActions = {
    ...authActions,
  };

  return {
    actions: bindActionCreators(allActions, dispatch),
  };
}

export default connect(null, mapDispatchToProps)(Signup);
