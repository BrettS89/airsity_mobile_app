import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import NavHead from '../../navigation/MainNavHead';

export default function AccountView(props) {
  return (
    <View style={styles.mainContainer}>
      <NavHead />
      <View style={styles.contentContainer}>
        <Text style={styles.header}>My account</Text>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.accountButton}>
            <Text style={styles.accountText}>Privacy policy</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.accountButton}>
            <Text style={styles.accountText}>Terms and conditions</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.accountButton}>
            <Text style={styles.accountText}>Contact us</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.accountButton}>
            <Text style={styles.accountText}>Log out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}