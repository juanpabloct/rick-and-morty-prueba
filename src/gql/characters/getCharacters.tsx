import { gql } from '@apollo/client';

const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        id
        name
        species
        image
      }
    }
  }
`;
export default GET_CHARACTERS;
