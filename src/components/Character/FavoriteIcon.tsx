import Favorite from '../../assets/icons/Favorite.svg';
import FavoriteActive from '../../assets/icons/FavoriteActive.svg';

const FavoriteIcon = ({
  addOrRemoveStarred,
  existCharacterStarred
}: {
  addOrRemoveStarred: () => void;
  existCharacterStarred: boolean;
}) => {
  if (existCharacterStarred) {
    return (
      <img
        src={FavoriteActive}
        alt={'favorite icon'}
        onClick={(e) => {
          e.preventDefault();
          addOrRemoveStarred();
        }}
        className='cursor-pointer'
      />
    );
  }
  return (
    <img
      src={Favorite}
      alt={'favorite icon'}
      onClick={(e) => {
        e.preventDefault();
        addOrRemoveStarred();
      }}
      className='mr-[6px] cursor-pointer'
    />
  );
};

export default FavoriteIcon;
