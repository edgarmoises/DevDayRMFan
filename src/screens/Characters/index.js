import React, { Component } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import {getAllCharacters} from '../../data/CharactersApi';
import PaginationList from '../../components/PaginationList';

export default class CaractersScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      characters: [],
      currentPage: 0,
      pages: 0
    }
  }

  componentDidMount() {
    this.requestCharacters();
  }

  requestCharacters = () => {
    const { currentPage, pages } = this.state;
    if (currentPage <= pages) {
      this.setState({
        currentPage: this.state.currentPage + 1,
        isLoading: true
      }, () => {
        getAllCharacters(this.state.currentPage)
        .then(response => {
          this.setState({
            isLoading: false,
            characters: this.state.characters.concat(response.characters),
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
    const { isLoading, characters } = this.state;
    return (
      <PaginationList 
        isLoading={isLoading}
        characters={characters} 
        itemPressCallback={this.itemPressed} 
        endReachedCallback={this.requestCharacters} 
      />
    );
  }
}
