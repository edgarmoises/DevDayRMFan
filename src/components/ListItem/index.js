import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default class ListItem extends Component {
  onPress = () => {
      this.props.onPress(this.props.character);
  };

  render () {
    return (
      <TouchableOpacity onPress={this.onPress}>
        <View style={this.props.styles}>
          <Text>{this.props.character.name}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
