import { gql } from '@apollo/client';

const GET_CHARACTERS = gql`
  query Characters($filter: FilterCharacter, $page: Int) {
    characters(filter: $filter, page: $page) {
      results {
        image
        name
        species
        id
      }
    }
  }
`;
export default GET_CHARACTERS;
