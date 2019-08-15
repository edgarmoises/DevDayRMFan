import React, { Component } from 'react';
import CharactersList from '../../components/CharactersList';
import { 
  getFavoritesCharacters, 
  subscribeToUpdates, 
  unsuscribeToUpdates,
  parseFavorites
} from '../../data/CharactersApi';
import { getUser } from '../../data/UserRepository';

export default class FavoritesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: []
    };
  }

  componentDidMount() {
    getUser().then(uid => {
      getFavoritesCharacters(uid)
      .then(favorites => this.setState({ favorites: favorites }));
    });

    subscribeToUpdates(this.onFavoritesUpdate);
  }

  componentWillUnmount() {
    unsuscribeToUpdates();
  }

  onFavoritesUpdate = snaphsot => {
    const favorites = parseFavorites(snaphsot);
    if (this.state.favorites.length !== favorites.length) {
      this.setState({
        favorites
      });
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
    const { favorites } = this.state;
    return (
      <CharactersList characters={favorites} itemPressCallback={this.itemPressed} />
    );
  }
}
