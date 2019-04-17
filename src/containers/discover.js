import Discover from '../components/Discover';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as songsActions from '../redux/actions/songsActions';
import * as playerActions from '../redux/actions/playerActions';
import * as appActions from '../redux/actions/appActions';

const mapStateToProps = state => {
  return {
    state: {
      songs: state.songs.songs,
      player: state.player,
      sortModal: state.songs.openSortModal,
    },
  };
};

const mapDispatchToProps = dispatch => {
  const allActions = {
    ...songsActions,
    ...appActions,
    ...playerActions,
  };

  return {
    actions: bindActionCreators(allActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Discover);
