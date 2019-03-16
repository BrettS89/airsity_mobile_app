import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Colors from '../../shared/colors';
import { LOGO_WHITE } from '../../../assets';
// const logo = require('../../../assets/logowhite.png');

const Logo = props => {
  return (
    <View style={styles.logoContainer}>
      {/* <Text style={styles.logoText}>Fun Money</Text> */}
      <Image source={LOGO_WHITE} resizeMode="contain" style={{ width: 150, alignItems: 'flex-end' }}/>
    </View>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    flexDirection: 'row',
    flex: 1,
    marginLeft: 15,
    justifyContent: 'center'
    // paddingBottom: 15
  },
  logoText: {
    fontSize: 22,
    letterSpacing: 1,
    fontWeight: '600',
    color: Colors.logo,
  }
})

export default Logo;
