import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Input } from '../../shared/components';
import Colors from '../../shared/styles/colors';
import styles from './styles';
import { LOGO3 } from '../../../assets/images/';

export default function LoginView(props) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.loginFormContainer}>

        <View style={styles.logoContainer}>
          <Image source={LOGO3} resizeMode="contain" style={{ width: 140, height: 50 }} />
          {/* <Text style={styles.logo}>Airsity</Text> */}
        </View>

        <View style={{ marginTop: 40, marginBottom: 15 }}>
          <View>
            <Input
              name="email"
              labelText="email"
              email={true}
              placeholder="Email"
              onChangeText={email => props.onTextChange(email, 'email')}
              onSubmitHandler={props.onLogin}
            />
          </View>

          <View>
            <Input 
              name="password"
              labelText="password"
              placeholder="Password"
              secureTextEntry
              onChangeText={password => props.onTextChange(password, 'password')}
              onSubmitHandler={props.onLogin}
            />
          </View> 

          <View>
            {/* {this.showError()} */}
          </View>

        </View>    

        <View>
          <TouchableOpacity  
            style={styles.button}
            onPress={props.onLogin}
          >
            {/* {this.spinnerOrText()} */}<Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>  
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
          <Text>New to Airsity?</Text>
          <TouchableOpacity onPress={props.navigateToSignup}>
            <Text style={{ color: Colors.secondary, fontWeight: '700' }}> Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
