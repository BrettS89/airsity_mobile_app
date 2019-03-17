import { Audio } from 'expo';
import { soundObject1, soundObject2, playlistSoundObject } from '../../index';
import React from 'react';
import DiscoverView from './view';

class Discover extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playing: false,
      player: 1,
    };

    this.soundObject1 = new Audio.Sound();
    this.soundObject2 = new Audio.Sound();
  }

  async componentDidMount() {
    await this.props.actions.getSongs('hiphop');
    setTimeout(async () => {
      await soundObject1.loadAsync({ uri: this.props.state.songs[0].audio});
      await soundObject2.loadAsync({ uri: this.props.state.songs[1].audio});
      this.props.actions.setNotLoading();
    }, 1000);
    
  }

  nextSong = async action => {
    await playlistSoundObject.unloadAsync();
    if (this.state.player === 1) {
      await soundObject1.unloadAsync();
      await soundObject2.playAsync();
      await this.props.actions.nextSong(action);
      await soundObject1.loadAsync({ uri: this.props.state.songs[2].audio});
      await soundObject2.setIsLoopingAsync(true)
      this.setState({ player: 2 });
    } else {
      await soundObject2.unloadAsync();
      await soundObject1.playAsync();
      await this.props.actions.nextSong(action);
      await soundObject2.loadAsync({ uri: this.props.state.songs[2].audio});
      await soundObject1.setIsLoopingAsync(true)
      this.setState({ player: 1 });
    }
  };

  play = async () => {
    this.setState({ playing: true });
    await playlistSoundObject.unloadAsync();
    this.props.actions.setIsPlaying();
    if (this.state.player === 1) {
      await soundObject1.playAsync();
      await soundObject1.setIsLoopingAsync(true)
    } else {
      await soundObject2.playAsync();
      await soundObject2.setIsLoopingAsync(true)
    }
  };

  pause = async () => {
    this.props.actions.setIsPaused();
    if (this.state.player === 1) {
      await soundObject1.pauseAsync();
    } else {
      soundObject2.pauseAsync();
    }
  };

  render() {
    return (
      <DiscoverView
        song={this.props.state.songs[0]}
        nextSong={this.nextSong}
        play={this.play}
        pause={this.pause}
        playing={this.props.state.player.playing}
      />
    );
  }
}

export default Discover;
