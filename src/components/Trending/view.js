import React from 'react';
import styles from './styles';
import NavHead from '../../navigation/MainNavHead';
import SongCard from './sub_components/songCard';
import { View, FlatList } from 'react-native';
import { useKeepAwake } from 'expo-keep-awake';

export default function trendingView ({ songs, state, play, playing, playingId, pause, streamIcon }) {
  useKeepAwake();
  return (
    <View style={styles.mainContainer}>
      <NavHead trending />
      <View style={styles.trendingContainer}>
        <FlatList
          data={songs}
          extraData={[songs, state]}
          keyExtractor={song => song._id}
          showsVerticalScrollIndicator={false}
          renderItem={song => (
            <SongCard
              song={song.item}
              play={play}
              playing={playing}
              playingId={playingId}
              pause={pause}
              streamIcon={streamIcon}
            />
          )}
        />
      </View>
    </View>
  );
}
