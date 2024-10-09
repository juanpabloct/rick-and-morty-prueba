import { gql } from '@apollo/client';

const GET_CHARACTER_BY_ID = gql`
 query Characters($ids: [ID!]!) {
  charactersByIds(ids: $ids) {
    image
    id
    name
    species
    status
    type
  }
}
`;
export default GET_CHARACTER_BY_ID;
