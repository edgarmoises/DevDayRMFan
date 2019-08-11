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

const AuthStack = createStackNavigator ({
  Login: LoginScreen,
});

const TabStack = createBottomTabNavigator (
  {
    Characters: CharactersScreen,
    Favorites: FavoritesScreen,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Characters') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Favorites') {
          iconName = `ios-options`;
        }

        // You can return any component that you like here!
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
