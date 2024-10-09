const ResultCharacters = ({ QuantityResults }: { QuantityResults: number }) => {
  return (
    <section>
      <div className='flex justify-between h-14 items-center mt-3'>
        <span className='text-blueText font-semibold'>
          {QuantityResults} Results
        </span>
        <span className='text-greenText font-semibold rounded-full bg-[#e0f7d7] py-[2px] px-3'>
          Filter
        </span>
      </div>
      <div className='flex flex-col'></div>
    </section>
  );
};

export default ResultCharacters;
