import Playlist from '../components/Playlist';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as playlistActions from '../redux/actions/playlistActions';
import * as playerActions from '../redux/actions/playerActions';

const mapStateToProps = state => ({
  state: {
    playlist: state.playlist,
    player: state.player,
  },
});

const mapDispatchToProps = dispatch => {
  const allActions = {
    ...playlistActions,
    ...playerActions,
  };

  return {
    actions: bindActionCreators(allActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);
