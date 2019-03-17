import React from 'react';
import { KeepAwake } from 'expo';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { getIsoDate } from '../../utilities/misc';
import styles from './styles';
import NavHead from '../../navigation/MainNavHead';
import Colors from '../../shared/styles/colors';
import Player from 'react-native-vector-icons/FontAwesome';
import Pause from 'react-native-vector-icons/MaterialIcons';

export default function DiscoverView({ song, nextSong, play, pause, playing }) {
  const body = {
    date: Date.now(),
    isoDate: getIsoDate(),
    song: song._id,
    genre: song.genre,
  };

  const renderPlayOrPause = () => {
    if (!playing) {
      return (
        <TouchableOpacity style={styles.playPause} onPress={play}>
          <Player name="play-circle" size={85} color={Colors.secondary} />
        </TouchableOpacity>
      );
    }
    return (
      <TouchableOpacity style={styles.pause} onPress={pause}>
        <Pause name="pause-circle-filled" size={87} color={Colors.secondary} />
      </TouchableOpacity>
    )
  };

  const displayText = (content, limit) => {
    let newContent = content;
    if (content.length > limit) newContent = `${content.substring(0, limit)}...`;
    return newContent;
  };

  return (
    <View style={{ flex: 1 }}>
      <KeepAwake />
      <NavHead play />
      <View style={styles.mainContainer}>
        <Image 
          resizeMode="cover" 
          source={{ uri: song.photo }} 
          style={styles.albumArt}
        />
        <Text style={styles.title}>
          {song ? displayText(song.title, 32) : ''}
        </Text>
        <Text style={styles.artist}>
          {song.artist ? displayText(song.artist, 35) : ''}
        </Text>
        <View style={styles.actions}>
          <TouchableOpacity onPress={() => nextSong({ action: 'dismiss', song: song._id })}>
            <Player name="close" size={65} color={Colors.main} />
          </TouchableOpacity>
          {renderPlayOrPause()}
          <TouchableOpacity onPress={() => nextSong({ action: 'like', song: body })}>
            <Player name="heart" size={50} color={Colors.main} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
