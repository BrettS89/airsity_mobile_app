import Login from '../components/Login';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authActions from '../redux/actions/authActions';
import * as navigationActions from '../redux/actions/navigationActions';

const mapStateToProps = state => ({
  state: {
    auth: state.auth,
  },
});

function mapDispatchToProps(dispatch) {
  const allActions = {
    ...authActions,
    ...navigationActions,
  };

  return {
    actions: bindActionCreators(allActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
