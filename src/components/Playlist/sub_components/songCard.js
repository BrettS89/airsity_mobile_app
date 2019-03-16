import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import styles from '../styles';
import Player from 'react-native-vector-icons/FontAwesome';
import Pause from 'react-native-vector-icons/MaterialIcons';
import player from '../../../redux/reducers/player';

export default function SongCard({ song, play, pause, playing, playingId }) {
  const { song: { photo, title, artist, audio } } = song;

  const renderPlayOrPause = () => {
    if (playing && playingId === song._id) {
      return  (
        <TouchableOpacity style={styles.actionButton} onPress={() => pause()}>
          <Pause name="pause-circle-filled" size={60} color={'rgba(255, 255, 255, 0.7)'} />
        </TouchableOpacity>
      );
    }
    return (
      <TouchableOpacity style={styles.actionButton} onPress={() => play({ _id: song._id, audio })}>
        <Player name="play-circle" size={55} color={'rgba(255, 255, 255, 0.7)'} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.songCard}>
      <View style={styles.albumArtContainer}>
        <ImageBackground style={styles.albumArt} source={{ uri: photo }} imageStyle={{ borderRadius: 4 }}>
          {renderPlayOrPause()}
        </ImageBackground>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.artist}>{artist}</Text>
      </View>
    </View>
  );
}
