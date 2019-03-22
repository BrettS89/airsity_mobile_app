import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import NavHead from '../../navigation/MainNavHead';

export default function LegalDocsView({ navigateTo }) {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <NavHead />
      <View style={styles.mainContainer}>
        <TouchableOpacity onPress={() => navigateTo('Login')} style={{ marginBottom: 20 }}>
          <Text>Back</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigateTo('TermsAndConditions')}>
          <Text>Terms and conditions</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigateTo('PrivacyPolicy')}>
          <Text>Privacy Policy</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}
