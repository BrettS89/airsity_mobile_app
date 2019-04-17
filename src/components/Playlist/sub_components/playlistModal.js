import React from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles';
import Close from 'react-native-vector-icons/FontAwesome';

export default function PlaylistModal({ modalOpen, closeModal, selectGenre }) {
  return (
    <Modal
      transparent 
      visible={modalOpen} 
      animationType="fade"
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContentContainer}>
          <TouchableOpacity style={styles.modalClose} onPress={closeModal}>
            <Close name="close" size={25} />
          </TouchableOpacity>
          <View style={{ alignItems: 'center' }}>
            <Text style={styles.modalTitle}>Filter playlist by genre</Text>
            <View style={styles.modalButtons}>

              <TouchableOpacity style={styles.modalButton} onPress={() => selectGenre({ display: 'All genres', value: 'all' })}>
                <Text style={styles.modalText}>All genres</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.modalButton} onPress={() => selectGenre({ display: 'Hip hop', value: 'hiphop' })}>
                <Text style={styles.modalText}>Hip hop</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.modalButton} onPress={() => selectGenre({ display: 'Pop', value: 'pop' })}>
                <Text style={styles.modalText}>Pop</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.modalButton} onPress={() => selectGenre({ display: 'R&B', value: 'rnb' })}>
                <Text style={styles.modalText}>R&B</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.modalButton} onPress={() => selectGenre({ display: 'EDM', value: 'edm' })}>
                <Text style={styles.modalText}>EDM</Text>
              </TouchableOpacity>

            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}
