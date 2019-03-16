import React from 'react';
import { View, FlatList } from 'react-native';
import styles from './styles';
import NavHead from '../../navigation/MainNavHead';
import SongCard from './sub_components/songCard';
import PlaylistModal from './sub_components/playlistModal';

export default function Playlist({ state, songs, play, pause, playing, playingId, playlistGetMore, modalOpen, closeModal, selectGenre }) {
  return (
    <View style={styles.mainContainer}>
      <NavHead playlist />
      <View style={styles.playlistContainer}>
        <FlatList
          data={songs}
          extraData={state}
          keyExtractor={song => song._id}
          showsVerticalScrollIndicator={false}
          onEndReached={playlistGetMore}
          onEndReachedThreshold={1}
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
