import Genres from '../components/Genres';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as songsActions from '../redux/actions/songsActions';

const mapDispatchToProps = dispatch => {
  const allActions = {
    ...songsActions,
  };

  return {
    actions: bindActionCreators(allActions, dispatch),
  };
}

export default connect(null, mapDispatchToProps)(Genres);
