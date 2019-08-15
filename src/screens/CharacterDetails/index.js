import React, { Component } from 'react';
import { Container, Text, Content, Button } from 'native-base';
import { Image } from 'react-native';
import {isCharacterFavorite, saveCharacterToFavorites} from '../../data/CharactersApi';
import {getUser} from '../../data/UserRepository';

export default class CharacterDetailsScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFavorite: false
    };
  }

  componentDidMount() {
    this.verifyIsFavorite();
  }

  verifyIsFavorite = async () => {
    const user = await getUser();
    const characterId = this.props.navigation.getParam('id', 'N/A');
    const isFavorite = await isCharacterFavorite(user, characterId);

    this.setState({
      isFavorite
    });
  }
  saveToFavorites = async(id, image, name, status, species) => {
    const userId = await getUser();
    const favorite = {
      uid: userId,
      id,
      image,
      name,
      status,
      species
    }

    await saveCharacterToFavorites(favorite);
  }

  render() {
    const { navigation } = this.props;
    const id = navigation.getParam('id', 'N/A');
    const image = navigation.getParam('image', 'N/A');
    const name = navigation.getParam('name', 'N/A');
    const status = navigation.getParam('status', 'N/A');
    const species = navigation.getParam('species', 'N/A');

    return (
      <Container>
        <Image style={{width: '100%', height: 250}} source={{uri: image}} />
        <Content>
          <Text>{`Name: ${name}`}</Text>
          <Text>{`Status: ${status}`}</Text>
          <Text>{`Species: ${species}`}</Text>
          {
            !this.state.isFavorite
            &&
            <Button onPress={() => this.saveToFavorites(id, image, name, status, species)}>
              <Text>
                Save to Favorites
              </Text>
            </Button>
          }
        </Content>
      </Container>
    );
  }
}
