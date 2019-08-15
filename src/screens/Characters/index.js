import React, { Component } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import {getAllCharacters} from '../../data/CharactersApi';
import CharactersList from '../../components/CharactersList';

export default class CaractersScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      currentPage: 1,
      next: undefined,
      pages: 0
    }
  }

  componentDidMount() {
    getAllCharacters(this.state.currentPage)
    .then(response => {
      this.setState({
        characters: response.characters,
        currentPage: this.state.currentPage = 1,
        next: response.next,
        pages: response.pages
      });
    });
  }

  requestCharacters = () => {
    const { currentPage, next, pages } = this.state;
    if (currentPage !== pages) {
      this.setState({
        currentPage: this.state.currentPage + 1,
      }, () => {
        getAllCharacters(this.state.currentPage)
        .then(response => {
          this.setState({
            characters: this.state.characters.concat(response.characters),
            next: response,next,
            pages: response.pages
          });
        }).catch(error => {
          debugger;
          console.log(error.message)
        });
      })
    }
  }

  itemPressed = character => {
    this.props.navigation.navigate('CharacterDetails', {
      id: character.id,
      image: character.image,
      name: character.name,
      status: character.status,
      species: character.species
    });
  }

  render() {
    const { characters } = this.state;
    return (
      <CharactersList 
        characters={characters} 
        itemPressCallback={this.itemPressed} 
        endReachedCallback={this.requestCharacters} 
      />
    );
  }
}
