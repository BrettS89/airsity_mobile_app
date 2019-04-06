import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Input } from '../../shared/components';
import Colors from '../../shared/styles/colors';
import styles from './styles';
import { LOGO5 } from '../../../assets/images/';
import { Spinner } from '../../shared/components/Spinner';
import Facebook from 'react-native-vector-icons/FontAwesome';

export default function LoginView(props) {

  const showError = () => {
    if (props.error) return <Text style={{ color: 'red', fontSize: 13 }}>We couldn't log you in. Please try again.</Text>;
  };

  const buttonOrSpinner = () => {
    if (props.loading) {
      return (
        <View>
          <Spinner color={Colors.main} />
        </View>
      )
    }
    return (
      <TouchableOpacity  
        style={styles.button}
        onPress={props.onLogin}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    )
  };

  const facebookOrSpinner = () => {
    if (props.facebookLoading) {
      return (
        <View>
          <Spinner color={Colors.secondary} />
        </View>
      )
    }
    return (
      <TouchableOpacity  
        style={styles.facebookButton}
        onPress={props.facebookAuth}
      >
        <Facebook size={25} name="facebook-square" color={Colors.secondary} />
        <Text style={styles.facebookText}>Facebook login</Text>
      </TouchableOpacity>
    )
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.loginFormContainer}>

        <View style={styles.logoContainer}>
          <Image source={LOGO5} resizeMode="contain" style={{ width: 160, height: 50 }} />
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
            {showError()}
          </View>

        </View>

        <View>
          {buttonOrSpinner()}
          <View style={{ width: '100%', alignItems: 'center', marginVertical: 5 }}>
            <Text>or</Text>
          </View>
          {facebookOrSpinner()}
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
          <Text>New to Airsity?</Text>
          <TouchableOpacity onPress={props.navigateToSignup}>
            <Text style={{ color: Colors.secondary, fontWeight: '700' }}> Sign Up</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.tcContainer} onPress={props.navigateTo}>
          <Text style={styles.tcText}>By signing up or logging in you agree to our 
          <Text style={styles.tcText2}> terms and conditions </Text>
          <Text style={styles.tcText}>and </Text>
          <Text style={styles.tcText2}>privacy policy.</Text>
          </Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}
