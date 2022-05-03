import React from 'react';
import { useCycle } from 'framer-motion';

const years = [];
const currDate = new Date();
const currYear = currDate.getFullYear();

for (let i = 2018; i <= currYear; i += 1) {
  years.push(i);
}

export default function EventDropdown({ year, changeYear }) {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <div>
      <h1 className='mb-2 text-xl font-medium text-left'>Year</h1>
      <div className='relative sm:min-w-[12.5em] border-2 border-gray-400 rounded '>
        <button type='button' onClick={toggleOpen} className='w-full text-left'>
          <h1 className='flex items-center p-3 text-xl text-ming lg:text-xl lg:text-oxford-blue lg:font-bold lg:tracking-wider'>
            {Number.isInteger(year) ? `${year}` : 'All'}
            <svg width='13' height='11' viewBox='0 0 13 11' className='ml-auto'>
              <path
                d='M6.5 11L0.870833 0.500001L12.1292 0.5L6.5 11Z'
                fill='#000000'
              />
            </svg>
          </h1>
        </button>

        {isOpen ? (
          <ul className='absolute z-10 flex flex-col items-center w-full pb-2 bg-white border-2 border-t-0 gap-y-2 lg:gap-y-6 lg:py-4 rounded-b-xl'>
            <li key={year}>
              <button
                type='button'
                onClick={() => {
                  changeYear('All');
                  toggleOpen();
                }}
                className='text-xl text-ming lg:text-lg'
              >
                All
              </button>
            </li>
            {years.map((_year) => (
              <li key={_year}>
                <button
                  type='button'
                  onClick={() => {
                    changeYear(_year);
                    toggleOpen();
                  }}
                  className='text-xl text-ming lg:text-lg'
                >
                  {_year}
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
