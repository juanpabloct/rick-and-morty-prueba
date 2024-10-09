// * Import hooks
import { useGetParams } from '../../hooks/queryParams';

// * Import utils
import { ChangeEvent, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

// * Import component
import MoreFilters from './MoreFilters/MoreFilters';

// * Import img
import IconSearch from '../../assets/icons/Search.svg';

const Search = () => {
  const valueSearchParams = useGetParams('search');
  const [_, setSearchParams] = useSearchParams();

  const [searchName, setSearchName] = useState(valueSearchParams);
  const onSearchName = () => {
    setSearchParams({ search: searchName });
  };

  const onChangeInputSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchName(e.target.value);
  };
  return (
    <div className='w-full flex bg-[#F3F4F6] h-[52px] items-center rounded-lg pl-6 pr-4 justify-between mt-2 relative'>
      <div className='flex gap-2 '>
        <img
          src={IconSearch}
          alt='icon search'
          className='w-5 h-5'
          onClick={onSearchName}
        />
        <input
          placeholder='Search or filter results'
          defaultValue={searchName}
          onChange={onChangeInputSearch}
          onKeyUp={(e) => {
            if (e.key.toLowerCase() === 'enter') {
              onSearchName();
            }
          }}
        />
      </div>
      <MoreFilters search={searchName} />
    </div>
  );
};

export default Search;
