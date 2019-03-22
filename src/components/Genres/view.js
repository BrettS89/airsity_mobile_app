import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './style';
import NavHead from '../../navigation/MainNavHead';

export default function GenresView(props) {
  return (
    <View>
      <NavHead play />
      <View style={styles.contentContainer}>
        <Text style={styles.header}>Choose a genre</Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.genreButton}
            onPress={() => props.setGenre({ display: 'Hip hop', value: 'hiphop' })}
          >
            <Text style={styles.genreText}>Hip hop</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.genreButton}
            onPress={() => props.setGenre({ display: 'Pop', value: 'pop' })}
          >
            <Text style={styles.genreText}>Pop</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.genreButton}
            onPress={() => props.setGenre({ display: 'Pop', value: 'pop' })}
          >
            <Text style={styles.genreText}>R&B</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.genreButton}
            onPress={() => props.setGenre({ display: 'EDM', value: 'edm' })}
          >
            <Text style={styles.genreText}>EDM</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
