import Playlist from '../components/Playlist';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as playlistActions from '../redux/actions/playlistActions';

const mapStateToProps = state => ({
  state: {
    playlist: state.playlist,
  },
});

const mapDispatchToProps = dispatch => {
  const allActions = {
    ...playlistActions,
  };

  return {
    actions: bindActionCreators(allActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);
