// * Component of All Characters

// * Import interface
import { CharactersResults } from '../../gql/characters/getCharacters.inteface';

// * import query GRAPHQL
import GET_CHARACTERS from '../../gql/characters/getCharacters';

// * Import utils
import { useQuery } from '@apollo/client';
import { useGetParams } from '../../hooks/queryParams';

// * Import components
import Character from '../Character/Character';
import ResultCharacters from '../ResultCharacters/ResultCharactes';

const Characters = () => {
  const getSpecieParam = useGetParams('specie');
  const getSearchParam = useGetParams('search');
  // * Get queryParam of search
  const valueSearchParams = useGetParams('search');

  // * Validate if searching
  const isSearching = valueSearchParams.length > 0;
  const { loading, error, data } = useQuery<CharactersResults>(GET_CHARACTERS, {
    variables: {
      filter: {
        species: getSpecieParam,
        name: getSearchParam
      },
      page: null
    }
  });
  if (loading) {
    return <p>Cargando</p>;
  }
  if (error) {
    return <p>error</p>;
  }
  const results = (data as CharactersResults).characters.results;
  const quantityCharacters = results?.length ?? 0;
  return (
    <>
      {isSearching && <ResultCharacters QuantityResults={results.length} />}
      <div className='max-h-[45vh] overflow-auto characters'>
        <h2 className='h-14 flex items-center sticky top-0 bg-primary300'>
          CHARACTERS ({quantityCharacters})
        </h2>
        {results.map((infoCharacter) => (
          <Character {...infoCharacter} key={infoCharacter.id} />
        ))}
      </div>
    </>
  );
};

export default Characters;
