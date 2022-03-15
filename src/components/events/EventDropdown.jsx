import React from 'react';

export default function EventDropdown({ year }) {
  return (
    <div>
      <h1 className='text-2xl text-ming flex items-center gap-x-3'>
        {Number.isInteger(year) ? `A.Y. ${year}-${year + 1}` : 'All'}
        <svg width='13' height='11' viewBox='0 0 13 11'>
          <path
            d='M6.5 11L0.870833 0.500001L12.1292 0.5L6.5 11Z'
            fill='#0D6E7A'
          />
        </svg>
      </h1>
    </div>
  );
}
