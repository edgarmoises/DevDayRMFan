import React, {Component} from 'react';
import {Text, Container} from 'native-base';
import {
  getFavoritesCharacters,
  subscribeToUpdates,
  parseFavorites,
} from '../../data/CharactersApi';
import {getUser} from '../../data/UserRepository';
import PaginationList from '../../components/PaginationList';
import styles from './styles';

export default class FavoritesScreen extends Component {
  constructor (props) {
    super (props);
    this.state = {
      isLoading: false,
      favorites: [],
    };
  }

  componentDidMount () {
    subscribeToUpdates (this.onFavoritesUpdate);
    this.requestFavorites ();
  }

  requestFavorites = () => {
    this.setState (
      {
        isLoading: true,
      },
      () => {
        getFavoritesCharacters ().then (favorites =>
          this.setState ({isLoading: false, favorites: favorites})
        );
      }
    );
  };

  onFavoritesUpdate = snaphsot => {
    const favorites = parseFavorites (snaphsot);
    if (this.state.favorites.length !== favorites.length) {
      this.setState ({
        favorites,
      });
    }
  };

  itemPressed = character => {
    this.props.navigation.navigate ('CharacterDetails', {
      id: character.characterId,
      image: character.image,
      name: character.name,
      status: character.status,
      species: character.species,
    });
  };

  renderEmptyMessage = () => {
    return (
      <Container style={styles.container}>
        <Text style={styles.emptyText}>There is no favorites :(</Text>
      </Container>
    );
  };

  render () {
    const {favorites} = this.state;
    if (favorites && favorites.length === 0) return this.renderEmptyMessage ();

    return (
      <PaginationList
        characters={favorites}
        itemPressCallback={this.itemPressed}
      />
    );
  }
}
