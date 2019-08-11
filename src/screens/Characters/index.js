import React, { Component } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { Container, Text } from 'native-base';
import {getAllCharacters} from '../../data/CharactersApi';
import CharecterDetails from '../../components/CharacterItem';

export default class CaractersScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: []
    }
  }

  componentDidMount() {
    getAllCharacters()
    .then(response => {
      this.setState({
        characters: response.characters
      });
    });
  }

  chareacterPressed = character => {
    this.props.navigation.navigate('CharacterDetails', {
      id: character.id,
      image: character.image,
      name: character.name,
      status: character.status,
      species: character.species
    });
  }

  render() {
    return (
      <Container>
        <FlatList 
          data={this.state.characters}
          keyExtractor = {character => {
            return character.id.toString()
          }}
          renderItem={characterDetails => {
            return <CharecterDetails styles={styles.item} character={characterDetails.item} onPress={this.chareacterPressed} />
          }}
          
        />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  }
})
