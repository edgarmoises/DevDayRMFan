import React, { Component } from 'react';
import {Container, Spinner} from 'native-base';
import {ImageBackground} from 'react-native';
import styles from './styles';
import {getUser} from '../../data/UserRepository';

export default class SplashScreen extends Component {
  componentDidMount() {
      this.handleLogin();
  }

  handleLogin = async() => {
      const user = await getUser();
      if(user) return this.props.navigation.navigate('Home');

      this.props.navigation.navigate('Auth');
  }

  render() {
    return (
      <Container>
          <ImageBackground source={require('../../../res/images/1.jpg')} style={styles.backgroundImage}>
              <Spinner color='white' />
          </ImageBackground>
      </Container>
    );
  }
}
