// * import interface
import { CharacterI } from '../../gql/characters/getCharacters.inteface';

// * import context
import { UseContextStarred } from '../../context/ContextStarred';

// * import components
import FavoriteIcon from './FavoriteIcon';

// * import utils
import { Link, useLocation, useParams } from 'react-router-dom';

const Character = (props: CharacterI) => {
  // * get utils of starred
  const { onStarredCharacter, onExistCharacterStarred } = UseContextStarred();

  // * create action for remove character
  const addOrRemoveStarred = () => onStarredCharacter(props);

  // * Destructure information
  const { image, name, species, id } = props;

  // * validate if exist character in starred
  const existCharacterStarred = onExistCharacterStarred(id);

  // * Access params of route
  let { characterID } = useParams();
  characterID = characterID as string;

  // * Validate if param page is equal to current character
  const isCharacterSelected = characterID === id;

  // * access to queryParams for redirect to new route with queryParams
  const location = useLocation();
  const queryString = location.search;
  const routeTarget = `/${id}${queryString}`;

  return (
    <Link
      to={routeTarget}
      className={`flex rounded-lg px-5 py-4 justify-between cursor-pointer ${
        isCharacterSelected && 'bg-primary100'
      }`}
    >
      <div className='flex gap-4'>
        <img src={image} alt={name} className='w-8 h-8 rounded-full ' />
        <div>
          <h3 className='text-'>{name}</h3>
          <p>{species}</p>
        </div>
      </div>
      <FavoriteIcon
        addOrRemoveStarred={addOrRemoveStarred}
        existCharacterStarred={existCharacterStarred}
      />
    </Link>
  );
};

export default Character;
