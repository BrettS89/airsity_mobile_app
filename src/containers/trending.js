import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as songsActions from '../redux/actions/songsActions';
import * as playlistActions from '../redux/actions/playlistActions';
import * as playerActions from '../redux/actions/playerActions';
import Trending from '../components/Trending';

function mapStateToProps(state) {
  return {
    state: {
      playlist: state.playlist,
      trending: state.songs.trending,
      player: state.player,
      loading: state.app.loading,
    },
  };
}

const mapDispatchToProps = dispatch => {
  const allActions = {
    ...songsActions,
    ...playlistActions,
    ...playerActions,
  };

  return {
    actions: bindActionCreators(allActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Trending);
