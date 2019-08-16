import React from 'react';
import {
  createSwitchNavigator,
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LoginScreen from './Login';
import CharactersScreen from './Characters';
import FavoritesScreen from './Favorites';
import SplashScreen from './Splash';
import CharaterDetailsScreen from './CharacterDetails';
import ProfileScreen from './Profile';

const AuthStack = createStackNavigator ({
  Login: LoginScreen,
});

const TabStack = createBottomTabNavigator (
  {
    Characters: CharactersScreen,
    Favorites: FavoritesScreen,
    Profile: ProfileScreen
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        switch(routeName) {
          case 'Characters':
              iconName = 'md-list';
              break;
          case 'Favorites':
              iconName = 'ios-heart';
              break;
          case 'Profile':
              iconName = 'ios-contact';
              break;
        }

        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);

const HomeStack = createStackNavigator ({
  BottomTabs: {
    screen: TabStack,
  },
  CharacterDetails: {
    screen: CharaterDetailsScreen,
  },
});

export default createAppContainer (
  createSwitchNavigator (
    {
      Splash: SplashScreen,
      Auth: AuthStack,
      Home: HomeStack,
    },
    {
      initialRouteName: 'Splash',
    }
  )
);
