import React from 'react';
import {
  createStackNavigator,
  createMaterialTopTabNavigator,
  createBottomTabNavigator,
  createSwitchNavigator,
  createAppContainer,
} from 'react-navigation';

import Colors from '../shared/styles/colors';
import Icon1 from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Entypo';
import Icon3 from 'react-native-vector-icons/MaterialIcons';
import Icon4 from 'react-native-vector-icons/MaterialCommunityIcons';

import Signup from '../containers/signup';
import Login from '../containers/login';
import Auth from '../containers/auth';
import Genres from '../containers/genres';
import Discover from '../containers/discover';
import Playlist from '../containers/playlist';
import Account from '../containers/account';


const authNav = createBottomTabNavigator({
  Auth: { screen: Auth },
  Login: { screen: Login },
  Signup: { screen: Signup },
}, {
  initialRouteName: 'Login',
  tabBarOptions: {
    style: {
      display: 'none'
    }
  }
});

const mainNav = createBottomTabNavigator({
  Genres: {
    screen: Genres,
    navigationOptions: {
      title: 'Genres',
      activeTintColor: Colors.main,
      tabBarIcon: ({ tintColor }) => (
        <Icon2 name="list" size={26} color={tintColor}/>
      )
    }
  },
  Discover: {
    screen: Discover,
    navigationOptions: {
      title: 'Play',
      activeTintColor: Colors.main,
      tabBarIcon: ({ tintColor }) => (
        <Icon1 name="play-circle" size={25} color={tintColor}/>
      )
    }
  },
  Playlist: {
    screen: Playlist,
    navigationOptions: {
      title: 'Playlist',
      activeTintColor: Colors.main,
      tabBarIcon: ({ tintColor }) => (
        <Icon3 name="queue-music" size={30} color={tintColor}/>
      )
    }
  },
  Account: {
    screen: Account,
    navigationOptions: {
      title: 'Account',
      activeTintColor: Colors.main,
      tabBarIcon: ({ tintColor }) => (
        <Icon4 name="account" size={30} color={tintColor}/>
      )
    }
  },
}, {
  initialRouteName: 'Discover',
  tabBarOptions: {
    showIcon: true,
    activeTintColor: Colors.main,
    style: {
      paddingVertical: 4,
    }
  }
});

const rootNavigator = createSwitchNavigator({
  Login: { screen: authNav },
  Signup: { screen: Signup },
  Main: mainNav,
}, {
  initialRouteName: 'Main',
});

const AppNav = createAppContainer(rootNavigator);

export default AppNav;
