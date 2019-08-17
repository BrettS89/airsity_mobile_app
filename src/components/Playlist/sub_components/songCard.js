import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Linking } from 'react-native';
import styles from '../styles';
import Player from 'react-native-vector-icons/FontAwesome';
import Pause from 'react-native-vector-icons/MaterialIcons';
import StreamIcon from 'react-native-vector-icons/Entypo';

export default function SongCard({ song, play, pause, playing, playingId, streamIcon }) {
  const { song: { photo, title, artist, audio, genre, openInSpotify } } = song;

  const renderTitle = () => {
    return title.length > 37
      ? `${title.substring(0, 37)}...`
      : title;
  };

  const renderArtist = () => {
    return artist.length > 50
      ? `${artist.substring(0, 48)}...`
      : artist;
  };

  const renderPlayOrPause = () => {
    if (playing && playingId === song._id) {
      return  (
        <TouchableOpacity style={styles.actionButton} onPress={() => pause()}>
          <Pause name="pause-circle-filled" size={60} color={'rgba(255, 255, 255, 0.7)'} />
        </TouchableOpacity>
      );
    }
    return (
      <TouchableOpacity style={styles.actionButton} onPress={() => play({ _id: song._id, audio, genre })}>
        <Player name="play-circle" size={55} color={'rgba(255, 255, 255, 0.7)'} />
      </TouchableOpacity>
    );
  };

  const renderStreamIcon = () => {
    return streamIcon === 'youtube'
      ? <TouchableOpacity onPress={onStreamingServicePress}><StreamIcon name="youtube" size={35} color="#FF0000" /></TouchableOpacity>
      : <TouchableOpacity onPress={onStreamingServicePress}><StreamIcon name="spotify" size={35} color="#1CD15D" /></TouchableOpacity>
  };

  const onStreamingServicePress = () => {
    const url = streamIcon === 'spotify'
      ? openInSpotify
      : `https://www.youtube.com/results?search_query=${artist}+${title}`.split(' ').join('+');
    Linking.openURL(url); 
  };

  return (
    <View style={styles.songCard}>
      <View style={{ flexDirection: 'row', width: '80%'  }}>
        <View style={styles.albumArtContainer}>
          <ImageBackground style={styles.albumArt} source={{ uri: photo }} imageStyle={{ borderRadius: 4 }}>
            {renderPlayOrPause()}
          </ImageBackground>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{renderTitle()}</Text>
          <Text style={styles.artist}>{renderArtist()}</Text>
        </View>
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {renderStreamIcon()}
      </View>
    </View>
  );
}
