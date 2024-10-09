// * Import utils
import { useParams } from 'react-router-dom';

// * Import read ContextStarred
import { UseContextStarred } from '../../../context/ContextStarred';
// * import img
import FavoriteActive from '../../../assets/icons/FavoriteActive.svg';

const StarredIcon = () => {
  const { onExistCharacterStarred, onDeleteCharacter } = UseContextStarred();

  let { characterID } = useParams();
  characterID = characterID as string;
  const existCharacterStarred = onExistCharacterStarred(characterID);
  if (existCharacterStarred) {
    return (
      <img
        src={FavoriteActive}
        alt={'favorite icon'}
        onClick={() => {
          onDeleteCharacter(characterID);
        }}
        className='cursor-pointer absolute -right-[14px] bottom-2 h-8 w-8'
      />
    );
  }
  return null;
};

export default StarredIcon;
