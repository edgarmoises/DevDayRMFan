import React, { Component } from 'react';
import {Container, Spinner} from 'native-base';
import {ImageBackground} from 'react-native';
import styles from './styles';
import {getUser, saveToken} from '../../data/UserRepository';
import {messaging} from '../../data/FirebaseClient';

export default class SplashScreen extends Component {
  async componentDidMount() {
      await this.handleMessagingToken();
      await this.handleLogin();
  }

  handleMessagingToken = async() => {
    const fcmToken = await messaging.getToken();
      const user = await getUser();
      if(fcmToken && user) {
        await saveToken(user, fcmToken);
      }
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
              <Spinner color={styles.spinner.color} />
          </ImageBackground>
      </Container>
    );
  }
}
