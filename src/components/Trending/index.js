import React from 'react';
import TrendingView from './view';
import { soundObject1, soundObject2, playlistSoundObject } from '../../index';
import { apiTrendingPlay } from '../../lib/apiCalls';

class Trending extends React.Component {
  state = {
    playing: false,
    playingId: null,
  };

  componentDidMount() {
    this.props.actions.getTrendingSongs();
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
      apiTrendingPlay();
    }
    } catch(e) {
      console.log('Playlist play error: ', e);
    }
  };

  pause = async () => {
    this.props.actions.setPlaylistIsPaused();
    await playlistSoundObject.pauseAsync();
  };


  render () {
    return (
      <TrendingView
        songs={this.props.state.trending}
        playing={this.props.state.player.playlistPlaying}
        playingId={this.state.playingId}
        pause={this.pause}
        play={this.play}
        state={this.state}
        loading={this.props.state.loading}
        streamIcon={this.props.state.playlist.streamingService}
      />
    );
  }
}

export default Trending;
