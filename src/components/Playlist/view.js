import React from 'react';
import { useKeepAwake } from 'expo-keep-awake';
import { View, Text, FlatList } from 'react-native';
import styles from './styles';
import NavHead from '../../navigation/MainNavHead';
import SongCard from './sub_components/songCard';
import PlaylistModal from './sub_components/playlistModal';

export default function Playlist({ state, songs, play, pause, playing, playingId, playlistGetMore, modalOpen, closeModal, selectGenre, refresh, isRefreshing, loading, streamIcon, trackFullPlay }) {
  useKeepAwake();
  return songs.length > 0 || loading ? (
    <View style={styles.mainContainer}>
      <NavHead playlist />
      <View style={styles.playlistContainer}>
        <FlatList
          data={songs}
          extraData={[state, playing]}
          keyExtractor={song => song._id}
          showsVerticalScrollIndicator={false}
          onEndReached={playlistGetMore}
          onEndReachedThreshold={1}
          refreshing={isRefreshing}
          onRefresh={refresh}
          renderItem={song => (
            <SongCard
              song={song.item}
              play={play}
              playing={playing}
              playingId={playingId}
              pause={pause}
              streamIcon={streamIcon}
              trackFullPlay={trackFullPlay}
            />
          )}
        />
      </View>
      <PlaylistModal 
        modalOpen={modalOpen}
        closeModal={closeModal}
        selectGenre={selectGenre}
      />
    </View>
  )
  : (
    <View style={{ flex: 1 }}>
      <NavHead playlist />
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 16 }}>You don't have any songs in this playlist</Text>
      </View>
      <PlaylistModal 
        modalOpen={modalOpen}
        closeModal={closeModal}
        selectGenre={selectGenre}
      />
    </View>
  )
}
