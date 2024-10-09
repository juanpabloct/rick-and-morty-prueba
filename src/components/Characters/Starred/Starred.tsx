// * Component of Starred

// * Import components
import Character from '../../Character/Character';

// * Import Context
import { UseContextStarred } from '../../../context/ContextStarred';

const Starred = () => {
  const { characters } = UseContextStarred();
  const quantityCharactersStarred = characters.length;
  return (
    <div className='max-h-[45vh] overflow-auto starred'>
      <h2 className='h-14 flex items-center bg-primary300'>
        STARRED CHARACTERS ({quantityCharactersStarred})
      </h2>
      {characters.map((infoCharacter) => (
        <Character {...infoCharacter} key={infoCharacter.id} />
      ))}
    </div>
  );
};

export default Starred;
