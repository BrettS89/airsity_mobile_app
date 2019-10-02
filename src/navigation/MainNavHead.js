import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import * as playlistActions from '../redux/actions/playlistActions';
import * as songsActions from '../redux/actions/songsActions';
import Colors from '../shared/styles/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LOGO6 } from '../../assets/images';
import { getPlatform } from '../utilities/getPlatform';

const { height, iphonex, iphonexr } = getPlatform();
const styles = StyleSheet.create({
  mainContainer: {
    minHeight: iphonex || iphonexr ? 95 : 55,
    paddingHorizontal: 15,
    paddingTop: !iphonex || !iphonexr ? height * 0.04 : height * 0.03,
    paddingBottom: !iphonex || !iphonexr ? 0 : 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    fontSize: 24,
    fontWeight: '600',
    marginLeft: 5
  },
  genreContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.secondary,
    width: 90,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    paddingTop: 4,
    paddingBottom: 4,
  },
  genreText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 12,
  },
  sortText: {
    color: Colors.secondary,
    fontWeight: '600',
    fontSize: 13,
  },
  sortPreText: {
    fontWeight: '500',
    fontSize: 13,
  },
  caret: {
    marginLeft: 4,
  }
});

class MainNavHead extends React.Component {
 
  renderBadge = () => {
    if (this.props.play) {
      return (
        <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => this.props.actions.toggleSortModal(true)}>
          <Text style={styles.sortPreText}>Sort by: </Text>
          <Text style={styles.sortText}>{this.props.state.sortBy.display}</Text>
          <Icon style={[styles.caret, { color: Colors.secondary }]} name="caret-down" color="#fff" size={16} />
        </TouchableOpacity>
      );
    }
    if (this.props.playlist) {
      return (
        <TouchableOpacity style={styles.genreContainer} onPress={this.props.actions.togglePlaylistModal}>
          <Text style={styles.genreText}>{this.props.state.playlistGenre.display}</Text>
          <Icon style={styles.caret} name="caret-down" color="#fff" size={16} />
        </TouchableOpacity>
      );
    }
  }


  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.logoContainer}>
          <Image source={LOGO6} resizeMode="contain" style={{ width: 105, height: 40 }} />
        </View>
          {this.renderBadge()}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  state: {
    genre: state.songs.genre,
    sortBy: state.songs.sort,
    playlistGenre: state.playlist.genre,
  }
});

const mapDispatchToProps = dispatch => {
  const allActions = {
    ...playlistActions,
    ...songsActions,
  };

  return {
    actions: bindActionCreators(allActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainNavHead);
