// * Import utils
import { useState, ChangeEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useGetParams } from '../../../hooks/queryParams';

// * Import img
import IconMoreFilters from '../../../assets/icons/MoreFilters.svg';

const MoreFilters = (props: { search: string }) => {
  // * Get queryParamsPages
  const getSpecieParam = useGetParams('specie');
  const getCharacterParam = useGetParams('character');

  // * state for view more filters
  const [showOtherFilters, setShowOtherFilters] = useState(false);
  const onShowOtherFilters = () => {
    setShowOtherFilters(!showOtherFilters);
  };

  // * state for get information of form
  const [information, setInformation] = useState({
    specie: getSpecieParam,
    character: getCharacterParam
  });
  // * function for change state of information
  const onChangeInformation = ({
    target: { name, value }
  }: ChangeEvent<HTMLInputElement>) => {
    setInformation({ ...information, [name]: value });
  };

  // * Change new queryParams

  const [_, setSearchParams] = useSearchParams();
  const addFilters = () => {
    setSearchParams({ ...information, ...props });
    onShowOtherFilters();
  };
  return (
    <div className='more-filters'>
      <div
        className={`transition-all ${
          showOtherFilters ? 'bg-primary100 rounded-lg p-[9px] ' : ''
        }`}
      >
        <img
          src={IconMoreFilters}
          alt='more filters'
          className='w-4 h-4 cursor-pointer'
          onClick={onShowOtherFilters}
        />
      </div>
      <div
        className={` transition-all ${
          showOtherFilters ? 'visible' : 'invisible'
        }`}
      >
        <div className='absolute top-14 left-0 w-full bg-white z-10 p-6 flex flex-col gap-6 rounded-md'>
          <div className='flex flex-col gap-1'>
            <p className='mb-1'>Character</p>
            <div className='flex gap-2'>
              <div className='option'>
                <input
                  type='radio'
                  name='character'
                  id='all'
                  value={'all'}
                  onChange={onChangeInformation}
                  defaultChecked={information.character === 'all'}
                />
                <label className='text-sm font-semibold' htmlFor='all'>
                  All
                </label>
              </div>
              <div className='option'>
                <input
                  type='radio'
                  name='character'
                  id='starred'
                  value={'Starred'}
                  defaultChecked={information.character === 'Starred'}
                  onChange={onChangeInformation}
                />
                <label className='text-sm font-semibold' htmlFor='starred'>
                  Starred
                </label>
              </div>
              <div className='option'>
                <input
                  type='radio'
                  name='character'
                  id='others'
                  value={'Others'}
                  defaultChecked={information.character === 'Others'}
                  onChange={onChangeInformation}
                />
                <label className='text-sm font-semibold' htmlFor='others'>
                  Others
                </label>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-1 '>
            <p className='mb-1'>Specie</p>
            <div className='flex gap-2'>
              <div className='option'>
                <input
                  type='radio'
                  name='specie'
                  id='all'
                  value={'all'}
                  defaultChecked={information.specie === 'all'}
                  onChange={onChangeInformation}
                />
                <label className='text-sm font-semibold' htmlFor='all'>
                  All
                </label>
              </div>
              <div className='option'>
                <input
                  type='radio'
                  name='specie'
                  id='Human'
                  value={'Human'}
                  defaultChecked={information.specie === 'Human'}
                  onChange={onChangeInformation}
                />
                <label className='text-sm font-semibold' htmlFor='Human'>
                  Human
                </label>
              </div>
              <div className='option'>
                <input
                  type='radio'
                  name='specie'
                  id='Alien'
                  value={'Alien'}
                  defaultChecked={information.specie === 'Alien'}
                  onChange={onChangeInformation}
                />
                <label className='text-sm font-semibold' htmlFor='Alien'>
                  Alien
                </label>
              </div>
            </div>
          </div>
          <button
            className='py-[9px] px-[17px] w-full bg-primary600 text-white rounded-lg shadow-[0px 1px 2px 0px #0000000D]'
            onClick={addFilters}
          >
            Filter
          </button>
        </div>
      </div>
    </div>
  );
};

export default MoreFilters;
