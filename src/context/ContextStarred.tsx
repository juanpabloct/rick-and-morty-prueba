import { createContext, useContext, useState } from 'react';
import { CharacterI } from '../gql/characters/getCharacters.inteface';
import {
  ContextStarredI,
  ContextStarredValuesI
} from './ContextStarred.interface';

export const newContextStarred = createContext<ContextStarredValuesI>(
  Object.create(null)
);
export const ContextStarred = ({ children }: ContextStarredI) => {
  const [characters, setCharacters] = useState<CharacterI[]>([]);
  const onDeleteCharacter = (idCharacter: string) => {
    const setStructureCharacters = new Set(characters);
    for (let item of setStructureCharacters) {
      if (item.id === idCharacter) {
        setStructureCharacters.delete(item);
        break;
      }
    }
    const newCharacters = [...setStructureCharacters];
    setCharacters(newCharacters);
  };
  const addCharacter = (character: CharacterI) => {
    setCharacters([...characters, character]);
  };
  const onExistCharacterStarred = (characterID: string) => {
    const setStructureCharacters = new Set(characters);
    let existCharacterStarred = false;
    for (let item of setStructureCharacters.values()) {
      if (item.id === characterID) {
        existCharacterStarred = true;
        break;
      }
    }
    return existCharacterStarred;
  };
  const onStarredCharacter = (character: CharacterI) => {
    const existCharacterStarred = onExistCharacterStarred(character.id);
    if (existCharacterStarred) {
      onDeleteCharacter(character.id);
    } else {
      addCharacter(character);
    }
  };

  return (
    <newContextStarred.Provider
      value={{
        characters,
        onStarredCharacter,
        onExistCharacterStarred,
        onDeleteCharacter
      }}
    >
      {children}
    </newContextStarred.Provider>
  );
};
export const UseContextStarred = () => {
  const readContextStarred = useContext(newContextStarred);
  return readContextStarred;
};
