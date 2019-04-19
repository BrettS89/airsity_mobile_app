import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as playlistActions from '../redux/actions/playlistActions';
import SetStreamService from '../components/SetStreamService';

const mapDispatchToProps = dispatch => {
  const allActions = {
    ...playlistActions
  };

  return {
    actions: bindActionCreators(allActions, dispatch),
  };
}

export default connect(null, mapDispatchToProps)(SetStreamService);
