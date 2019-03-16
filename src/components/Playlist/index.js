import React from 'react';
import PlaylistView from './view';
import { soundObject1, soundObject2, playlistSoundObject } from '../../index';

class Playlist extends React.Component {
  state = {
    playing: false,
    playingId: null,
  };

  componentDidMount() {
    this.props.actions.getPlaylist();
  }

  play = async payload => {
    await soundObject1.pauseAsync();
    await soundObject2.pauseAsync();
    if (payload._id === this.state.playingId) {
      await playlistSoundObject.playAsync();
      this.setState({ playing: true });
    } else {
      await playlistSoundObject.unloadAsync();
      await playlistSoundObject.loadAsync({ uri: payload.audio });
      await playlistSoundObject.playAsync();
      await playlistSoundObject.setIsLoopingAsync(true);
      await this.setState({ playing: true, playingId: payload._id });
    }
  };

  pause = async () => {
    this.setState({ playing: false });
    await playlistSoundObject.pauseAsync();
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
        playing={this.state.playing}
        playingId={this.state.playingId}
        pause={this.pause}
        state={this.state}
        playlistGetMore={this.props.actions.getPlaylistScroll}
        modalOpen={this.props.state.playlist.modal}
        closeModal={this.props.actions.togglePlaylistModal}
        selectGenre={this.selectGenre}
      />
    );
  }
}

export default Playlist;
