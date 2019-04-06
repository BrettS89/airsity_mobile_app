import React from 'react';
import { View, Text } from 'react-native';
import Navhead from '../../navigation/MainNavHead';
import styles from './styles';
import Player from 'react-native-vector-icons/FontAwesome';

export default function Landing() {
  return (
    <View style={{ flex: 1 }}>
      <Navhead play />
      <Text>Landing</Text>

      <View style={styles.mainContainer}>
        <Image
          resizeMode="cover"
          source={{ uri: 'https://test.jpg' }}
          style={styles.albumArt}
        />
        <Text style={styles.title}>
          Privacy
        </Text>
        <Text style={styles.artist}>
          Chris Brown
        </Text>
        <View style={styles.actions}>
          <TouchableOpacity>
            <Player name="close" size={65} color={Colors.main} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.playPause}>
            <Player name="play-circle" size={85} color={Colors.secondary} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Player name="heart" size={50} color={Colors.main} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
