// * Import utils
import { Link, useLocation, useParams } from 'react-router-dom';

// * Import types
import { ReactNode } from 'react';

// * Import hooks
import { useGetParams } from '../../hooks/queryParams';

// * Import components
import Characters from '../Characters/Characters';
import Starred from '../Characters/Starred/Starred';
import Search from '../Search/Search';
import IconBack from '../../assets/icons/Back.svg';

const Layout = ({ children }: { children?: ReactNode }) => {
  // * Get queryParam of search
  const valueSearchParams = useGetParams('search');

  // * Validate if searching
  const isSearching = valueSearchParams.length > 0;

  // * Get Param characterID
  let { characterID } = useParams();
  characterID = characterID as string;
  // * Get Current QueryParam
  const location = useLocation();
  const queryString = location.search;
  // * Redirect with current QueryParams
  const linkBack = `/${queryString}`;

  return (
    <div className='flex bg-white min-h-screen'>
      <section
        className={`px-4 py-10 shadow-[0px 4px 60px 0px #0000000D] bg-primary300 flex-1 md:flex-none  ${
          !characterID ? '' : ' hidden md:block '
        }`}
      >
        <h1 className='ml-1'>Rick and Morty list</h1>
        <Search />
        {!isSearching && <Starred />}
        <Characters />
      </section>
      <section className={`md:flex-1 ${characterID ? 'flex-1' : 'md:flex-1'}`}>
        {characterID && (
          <Link to={linkBack} className='md:hidden'>
            <img
              src={IconBack}
              alt='icon back'
              className='w-[18px] h-[14px]  mx-5 mt-5'
            />
          </Link>
        )}
        {children}
      </section>
    </div>
  );
};

export default Layout;
