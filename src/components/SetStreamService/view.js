import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import Colors from '../../shared/styles/colors';
import Spotify from 'react-native-vector-icons/Entypo';

export default function SetStreamServiceView({ setStreamingService }) {
  return (
    <View style={styles.mainContainer}>
      <Spotify name="spotify" size={120} color="#1CD15D" />
      <Text style={styles.header}>Do you have Spotify Premium?</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={[styles.button, { borderColor: Colors.main }]} onPress={() => setStreamingService('spotify')}>
          <Text style={[styles.buttonText, { color: Colors.main }]}>Yup</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, { borderColor: Colors.secondary }]} onPress={() => setStreamingService('youtube')}>
          <Text style={[styles.buttonText, { color: Colors.secondary }]}>Nope</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
