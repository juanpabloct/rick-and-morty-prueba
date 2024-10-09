import { ApolloClient, InMemoryCache } from '@apollo/client';

const connection = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache()
});
export default connection;
