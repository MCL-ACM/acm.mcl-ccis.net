import React from 'react';

export default function HeroHeadingText() {
  return (
    <div className='flex flex-col text-right lg:text-center py-7 px-5'>
      <h1 className='text-4xl lg:text-7xl font-bold leading-snug text-oxford-blue'>
        A Student Chapter of ACM
      </h1>
      <h3 className='text-2xl lg:text-4xl font-bold leading-normal lg:mt-9 text-darkish-blue'>
        About us
      </h3>
    </div>
  );
}
