import React, {Component} from 'react';
import {FlatList} from 'react-native';
import {Container, Spinner} from 'native-base';
import ListItem from '../ListItem';
import styles from './styles';

export default class PaginationList extends Component {
  endReached = () => {
    if (this.props.endReachedCallback) this.props.endReachedCallback ();
  };

  onCharacterPressed = character => this.props.itemPressCallback (character);

  renderFooterLoader = () => <Spinner />;

  render () {
    const {isLoading, characters} = this.props;
    return (
      <Container style={styles.container}>
        <FlatList
          data={characters}
          keyExtractor={character => {
            return character.characterId.toString ();
          }}
          renderItem={characterDetails => {
            return (
              <ListItem
                character={characterDetails.item}
                onPress={this.onCharacterPressed}
              />
            );
          }}
          onEndReached={this.endReached}
          onEndReachedThreshold={0}
          ListFooterComponent={isLoading && this.renderFooterLoader}
        />
      </Container>
    );
  }
}
