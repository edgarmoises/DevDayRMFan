import React, {Component} from 'react';
import {logoutUser} from '../../data/UserRepository';
import {Container, Text, Button} from 'native-base';
import styles from './styles';

export default class ProfileScreen extends Component {
  logoutUser = async () => {
    await logoutUser ();
    await this.props.navigation.navigate ('Auth');
  };

  render () {
    return (
      <Container style={styles.container}>
        <Button rounded block style={styles.button} onPress={this.logoutUser}>
          <Text style={styles.buttonText}>
            Logout
          </Text>
        </Button>
      </Container>
    );
  }
}
