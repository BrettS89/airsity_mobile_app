import React from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles';
import Close from 'react-native-vector-icons/FontAwesome';

export default function ContactModal({ modalOpen, toggleModal }) {
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
            <Text style={styles.modalTitle}>chat@airsity.com</Text>
          </View>
        </View>
      </View>
    </Modal>
  );
}
