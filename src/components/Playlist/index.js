import React from 'react';
import PlaylistView from './view';
import { soundObject1, soundObject2, playlistSoundObject } from '../../index';
import { apiPlaylistPlay } from '../../lib/apiCalls';

class Playlist extends React.Component {
  state = {
    playing: false,
    playingId: null,
  };

  componentDidMount() {
    this.props.actions.getPlaylist();
  }

  play = async payload => {
    try {
    await soundObject1.pauseAsync();
    await soundObject2.pauseAsync();
    if (payload._id === this.state.playingId) {
      await playlistSoundObject.playAsync();
      this.setState({ playing: true });
      this.props.actions.setPlaylistIsPlaying();
    } else {
      await playlistSoundObject.unloadAsync();
      await playlistSoundObject.loadAsync({ uri: payload.audio });
      await playlistSoundObject.playAsync();
      await playlistSoundObject.setIsLoopingAsync(true);
      this.props.actions.setPlaylistIsPlaying();
      await this.setState({ playingId: payload._id });
      apiPlaylistPlay(payload.genre);
    }
    } catch(e) {
      console.log('Playlist play error: ', e);
    }
  };

  pause = async () => {
    this.props.actions.setPlaylistIsPaused();
    await playlistSoundObject.pauseAsync();
  };

  refresh = () => {
    this.props.actions.isRefreshing();
  };

  selectGenre = async payload => {
    this.props.actions.togglePlaylistModal();
    this.props.actions.setPlaylistGenre(payload);
    setTimeout(() => {
      this.props.actions.getPlaylist();
    }, 500);
  };

  render() {
    return (
      <PlaylistView 
        songs={this.props.state.playlist.songs}
        play={this.play}
        playing={this.props.state.player.playlistPlaying}
        playingId={this.state.playingId}
        pause={this.pause}
        state={this.state}
        playlistGetMore={this.props.actions.getPlaylistScroll}
        modalOpen={this.props.state.playlist.modal}
        closeModal={this.props.actions.togglePlaylistModal}
        selectGenre={this.selectGenre}
        refresh={this.refresh}
        isRefreshing={this.props.state.playlist.isRefreshing}
        loading={this.props.state.loading}
        streamIcon={this.props.state.playlist.streamingService}
      />
    );
  }
}

export default Playlist;
