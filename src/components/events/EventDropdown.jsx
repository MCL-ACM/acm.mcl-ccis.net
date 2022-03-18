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
    <div className='relative min-w-[12.5em]'>
      <button type='button' onClick={toggleOpen}>
        <h1 className='flex items-center pb-2 text-2xl text-ming lg:text-7xl lg:text-oxford-blue lg:font-bold lg:tracking-wider gap-x-3'>
          {Number.isInteger(year) ? `A.Y. ${year}-${year + 1}` : 'All'}
          <svg width='13' height='11' viewBox='0 0 13 11'>
            <path
              d='M6.5 11L0.870833 0.500001L12.1292 0.5L6.5 11Z'
              fill='#0D6E7A'
            />
          </svg>
        </h1>
      </button>

      {isOpen ? (
        <ul className='absolute z-10 flex flex-col items-center w-full pb-2 bg-white border-2 border-t-0 gap-y-2 lg:gap-y-8 lg:py-8 rounded-b-xl'>
          <li key={year}>
            <button
              type='button'
              onClick={() => {
                changeYear('All');
                toggleOpen();
              }}
              className='text-xl text-ming lg:text-2xl'
            >
              All
            </button>
          </li>
          {years.map((_year) => (
            <li key={`${_year}-${_year + 1}`}>
              <button
                type='button'
                onClick={() => {
                  changeYear(_year);
                  toggleOpen();
                }}
                className='lg:text-2xl text-xl text-ming'
              >{`${_year}-${_year + 1}`}</button>
            </li>
          ))}
        </ul>
      ) : (
        <div />
      )}
    </div>
  );
}
