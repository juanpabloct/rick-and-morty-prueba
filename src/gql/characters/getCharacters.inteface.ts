// * individual information per character
export interface CharacterI {
  __typename: string;
  id: string;
  name: string;
  species: string;
  image: string;
}

// *  information per characters
export interface CharactersData {
  __typename: string;
  results: CharacterI[];
}
// *  information per characters
export interface CharactersResults {
  characters: CharactersData;
}
