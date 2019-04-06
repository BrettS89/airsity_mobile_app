import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Spinner } from '../../shared/components/Spinner';
import { Input } from '../../shared/components';
import Colors from '../../shared/styles/colors';
import styles from './styles';
import { LOGO5 } from '../../../assets/images';
import Facebook from 'react-native-vector-icons/FontAwesome';

export default function SignupView(props) {

  const showError = () => {
    if (props.error) return <Text style={{ color: 'red', fontSize: 13 }}>We couldn't sign you up. Please try again.</Text>;
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
        onPress={props.onSignup}
      >
        <Text style={styles.buttonText}>Sign up</Text>
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
        <Text style={styles.facebookText}>Facebook signup</Text>
      </TouchableOpacity>
    )
  };

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
          <Text>Back to </Text>
          <TouchableOpacity onPress={props.navigateToLogin}>
            <Text style={{ color: Colors.secondary, fontWeight: '700' }}> Login</Text>
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
