import React from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles';
import Close from 'react-native-vector-icons/FontAwesome';

export default function SortModal({ modalOpen, toggleModal, changeSortBy }) {
  return (
    <Modal
      transparent
      visible={modalOpen} 
      animationType="fade"
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContentContainer}>
          <TouchableOpacity style={styles.modalClose} onPress={() => toggleModal(false)}>
            <Close name="close" size={25} />
          </TouchableOpacity>
          <View style={{ alignItems: 'center' }}>
            <Text style={styles.modalTitle}>Sort by</Text>
            <View style={styles.modalButtons}>

              <TouchableOpacity style={styles.modalButton} onPress={() => changeSortBy({ display: 'Popular songs', value: 'popular' })}>
                <Text style={styles.modalText}>Popular songs</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.modalButton} onPress={() => changeSortBy({ display: 'Newest songs', value: 'new' })}>
                <Text style={styles.modalText}>Newest songs</Text>
              </TouchableOpacity>

            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}