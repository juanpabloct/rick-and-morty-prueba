// * Import query GRAPHQL
import GET_CHARACTER_BY_ID from '../../gql/characterByID/characterByID';

// * Import utils
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

// * Import interface
import { InformationCharacterResultI } from '../../gql/characterByID/characterByID.interface';

// * Import components
import StarredIcon from './StarredIcon/StarredIcon';

const InformationCharacter = () => {
  // * Access params characterID route
  const { characterID } = useParams();

  // * Get information for characterID
  const { loading, error, data } = useQuery<InformationCharacterResultI>(
    GET_CHARACTER_BY_ID,
    {
      variables: {
        ids: characterID
      }
    }
  );
  if (loading) {
    return <p>Cargando</p>;
  }
  if (error) {
    return <p>error</p>;
  }
  const { image, name, species, status } = (data as InformationCharacterResultI)
    .charactersByIds[0];

  return (
    <div className='mx-4 md:mx-28 py-10'>
      <div>
        <div className='relative w-fit'>
          <img
            src={image}
            alt={name}
            className='rounded-full w-[75px] h-[75px]'
          />
          <StarredIcon />
        </div>
        <h1 className='mt-1'>{name}</h1>
      </div>
      <ul>
        <li className='flex flex-col justify-center h-[74px]'>
          <h3>Specie</h3>
          <p>{species}</p>
        </li>
        <li className='flex flex-col justify-center border-y border-[#e5e7eb] h-[74px]'>
          <h3>Status</h3>
          <p>{status}</p>
        </li>
        <li className='flex flex-col justify-center h-[74px]'>
          <h3>Occupation</h3>
          <p>{}</p>
        </li>
      </ul>
    </div>
  );
};

export default InformationCharacter;
