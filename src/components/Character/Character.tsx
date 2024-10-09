import { CharacterI } from '../../gql/characters/getCharacters.inteface';
import Favorite from '../../assets/icons/Favorite.svg';
const Character = ({ image, name, species }: CharacterI) => {
  return (
    <div className='flex rounded-lg px-5 py-4 justify-between'>
      <div className='flex gap-4'>
        <img src={image} alt={name} className='w-8 h-8 rounded-full ' />
        <div>
          <h3 className='text-'>{name}</h3>
          <p>{species}</p>
        </div>
        <img src={Favorite} alt={'favorite icon'} />
      </div>
    </div>
  );
};

export default Character;
