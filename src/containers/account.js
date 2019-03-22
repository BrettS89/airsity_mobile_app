import Account from '../components/Account';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as navigationActions from '../redux/actions/navigationActions';
import * as authActions from '../redux/actions/authActions';

const mapStateToProps = state => ({
  state: {
    navigation: state.navigation,
  },
});

const mapDispatchToProps = dispatch => {
  const allActions = {
    ...navigationActions,
    ...authActions,
  };
  
  return {
    actions: bindActionCreators(allActions, dispatch),
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Account);
