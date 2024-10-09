import { useQuery } from '@apollo/client';
import GET_CHARACTERS from '../../gql/characters/getCharacters';
import {
  CharactersData,
  CharactersResults
} from '../../gql/characters/getCharacters.inteface';
import Character from '../Character/Character';

const Characters = () => {
  const { loading, error, data } = useQuery<CharactersResults>(GET_CHARACTERS);
  if (loading) {
    return <div>Cargando</div>;
  }
  if (error) {
    return <div>error</div>;
  }
  const results = (data as CharactersResults).characters.results;
  const quantityCharacters = results?.length ?? 0;
  return (
    <div>
      <h2>CHARACTERS ({quantityCharacters})</h2>
      {results.map((infoCharacter) => (
        <Character {...infoCharacter} key={infoCharacter.id} />
      ))}
    </div>
  );
};

export default Characters;
