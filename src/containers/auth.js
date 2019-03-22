import Auth from '../components/Auth';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as appActions from '../redux/actions/appActions';


const mapStateToProps = state => ({
  state: {
    app: state.app,
  },
});

const mapDispatchToProps = dispatch => {
  const allActions = {
    ...appActions,
  };

  return {
    actions: bindActionCreators(allActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
