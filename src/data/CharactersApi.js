import axios from 'axios';
import { db } from './FirebaseClient';

const _baseUrl = 'https://rickandmortyapi.com/api';
const _fireStoreCollection = 'favorites';
let _dbRef = undefined;

export const getAllCharacters = (page) => {
  return new Promise (resolve => {
    axios
      .get (`${_baseUrl}/character/?page=${page}`)
      .then (response => {
        const { data } = response;
        const characters = data.results.map(character => {
          return {...character, characterId: character.id}
        });
        resolve({
          characters,
          pages: data.info.pages
        });
      })
      .catch(error => {
        debugger;
        resolve ({
          characters: [],
        });
      });
  });
};

export const isCharacterFavorite = (uid, characterId) => {
  return new Promise(async (resolve) => {
    try {
      const isFavorite = await db.collection(_fireStoreCollection)
                          .where('uid', '==', uid)
                          .where('characterId', '==', characterId)
                          .get();
      resolve(!isFavorite.empty);
    } catch(error) {
      resolve();
    }
  });
}

export const saveCharacterToFavorites = async(favorite) => {
  try {
    const {uid, id, image, name, status, species} = favorite;
    await db.collection(_fireStoreCollection).add({
      uid,
      characterId: id,
      image,
      name,
      status,
      species,
    });
  } catch (error) {
      console.log(error.message);
    return undefined;
  }
};

export const getFavoritesCharacters = async(uid) => {
  return new Promise(async(resolve) => {
    try {
      const favoritesQuery = await db.collection(_fireStoreCollection).where('uid', '==', uid).get();
      const favorites = parseFavorites(favoritesQuery);
      resolve(favorites);
    }catch(error) {
      resolve([]);
    }
  });
}

export const parseFavorites = data => {
  return data.docs.map(doc => doc.data());
}

export const subscribeToUpdates = updateCallback => {
  if (!_dbRef) _dbRef = db.collection(_fireStoreCollection);
  _dbRef.onSnapshot(updateCallback); 
}

export const unsuscribeToUpdates = () => {
  if(_dbRef) {
    debugger;
    _dbRef();
    _dbRef = undefined;
  }
}