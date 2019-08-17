import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';

export default class ListItem extends Component {
  onPress = () => {
    this.props.onPress (this.props.character);
  };

  render () {
    return (
      <TouchableOpacity onPress={this.onPress}>
        <View style={styles.container}>
          <View style={styles.infoContainer}>
            <Text style={styles.text}>
              {this.props.character.name}
            </Text>
            <Text style={styles.originText}>
              {`Status: ${this.props.character.status}`}
            </Text>
            <View  style={styles.separator}/>
          </View>
          <View style={styles.arrowContainer}>
            <Ionicons name='ios-arrow-forward' size={30} color={styles.arrow.color} />
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
