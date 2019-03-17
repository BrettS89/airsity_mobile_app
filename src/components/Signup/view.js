import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Input } from '../../shared/components';
import Colors from '../../shared/styles/colors';
import styles from './styles';
import { LOGO5 } from '../../../assets/images';

export default function SignupView(props) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.signupFormContainer}>

        <View style={styles.logoContainer}>
          <Image source={LOGO5} resizeMode="contain" style={{ width: 160, height: 50 }} />
          {/* <Text style={styles.logo}>Airsity</Text> */}
        </View>

        <View style={{ marginTop: 40, marginBottom: 15 }}>
        <View>
          <Input 
            labelText="firstname"
            placeholder="First name"
            onChangeText={firstName => props.onTextChange(firstName, 'firstName')}
              onSubmitHandler={props.onSignup}
            />
        </View> 

          <View>
            <Input
              name="email"
              labelText="email"
              email={true}
              placeholder="Email"
              onChangeText={email => props.onTextChange(email, 'email')}
              onSubmitHandler={props.onSignup}
            />
          </View>

          <View>
            <Input 
              name="password"
              labelText="password"
              placeholder="Password"
              secureTextEntry
              onChangeText={password => props.onTextChange(password, 'password')}
              onSubmitHandler={props.onSignup}
            />
          </View> 

          <View>
            {/* {this.showError()} */}
          </View>

        </View>    

        <View>
          <TouchableOpacity  
            style={styles.button}
            // onPress={props.onLogin}
          >
            {/* {this.spinnerOrText()} */}<Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>  
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
          <Text>New to Airsity?</Text>
          <TouchableOpacity>
            <Text style={{ color: Colors.secondary, fontWeight: '700' }}> Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
