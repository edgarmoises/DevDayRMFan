/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import NavigationManager from './screens/NavigationManager';
if(__DEV__) {
  import('./config/ReactotronConfig').then(() => console.log('Reactotron Configured'))
}

const App = () => {
  return (
    <NavigationManager />
  );
};

export default App;
