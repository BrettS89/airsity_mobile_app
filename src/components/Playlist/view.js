import React from 'react';
import { KeepAwake } from 'expo';
import { View, FlatList } from 'react-native';
import styles from './styles';
import NavHead from '../../navigation/MainNavHead';
import SongCard from './sub_components/songCard';
import PlaylistModal from './sub_components/playlistModal';

export default function Playlist({ state, songs, play, pause, playing, playingId, playlistGetMore, modalOpen, closeModal, selectGenre, refresh, isRefreshing }) {
  return (
    <View style={styles.mainContainer}>
      <KeepAwake />
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
  );
}
