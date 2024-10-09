import Characters from '../Characters/Characters';

const Layout = () => {
  return (
    <div className='flex bg-white'>
      <section className='px-4 shadow-[0px 4px 60px 0px #0000000D]'>
        <Characters />
      </section>
      <section></section>
    </div>
  );
};

export default Layout;
