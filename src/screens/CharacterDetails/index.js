import React, {Component} from 'react';
import {Container, Text, Content, Button, Spinner} from 'native-base';
import {Image, Alert} from 'react-native';
import styles from './styles';
import {
  isCharacterFavorite,
  saveCharacterToFavorites,
} from '../../data/CharactersApi';
import {getUser} from '../../data/UserRepository';

export default class CharacterDetailsScreen extends Component {
  constructor (props) {
    super (props);

    this.state = {
      isLoading: true,
      isFavorite: false,
    };
  }

  componentDidMount () {
    this.verifyIsFavorite ();
  }

  verifyIsFavorite = async () => {
    const user = await getUser ();
    const characterId = this.props.navigation.getParam ('id', 'N/A');
    const isFavorite = await isCharacterFavorite (user, characterId);

    this.setState ({
      isFavorite,
      isLoading: false,
    });
  };

  saveToFavorites = (id, image, name, status, species) => {
    this.setState (
      {
        isLoading: true,
      },
      async () => {
        const userId = await getUser ();
        const favorite = {
          uid: userId,
          id,
          image,
          name,
          status,
          species,
        };

        await saveCharacterToFavorites (favorite);
        Alert.alert ('Yeiii!', 'Character added to favorites', [
          {text: 'Ok', onPress: () => this.props.navigation.goBack ()},
        ]);
      }
    );
  };

  renderFavoriteButton = characterInfo => {
    const {isLoading, isFavorite} = this.state;

    if (isLoading) return <Spinner color={styles.spinner.color} />;

    const {id, image, name, status, species} = characterInfo;

    return (
      !isFavorite &&
      <Button
        rounded
        block
        style={styles.button}
        onPress={() => this.saveToFavorites (id, image, name, status, species)}
      >
        <Text style={styles.buttonText}>
          Save to Favorites
        </Text>
      </Button>
    );
  };

  render () {
    const {navigation} = this.props;
    const characterInfo = {
      id: navigation.getParam ('id', 'N/A'),
      image: navigation.getParam ('image', 'N/A'),
      name: navigation.getParam ('name', 'N/A'),
      status: navigation.getParam ('status', 'N/A'),
      species: navigation.getParam ('species', 'N/A'),
    };

    return (
      <Container style={styles.container}>
        <Image
          style={styles.image}
          source={{uri: characterInfo.image}}
        />
        <Content style={styles.contentContainer}>
          <Text
            style={styles.propertyText}
          >{`Name: ${characterInfo.name}`}</Text>
          <Text
            style={styles.propertyText}
          >{`Status: ${characterInfo.status}`}</Text>
          <Text
            style={styles.propertyText}
          >{`Species: ${characterInfo.species}`}</Text>
          {this.renderFavoriteButton (characterInfo)}
        </Content>
      </Container>
    );
  }
}
