import React from 'react';

export default function HeroHeadingText({ header, subheader, className }) {
  return (
    <div
      className={`flex flex-col px-5 text-right lg:text-center py-7 ${className}`}
    >
      <h1 className='text-4xl font-bold leading-snug lg:text-7xl text-oxford-blue'>
        {header}
      </h1>
      <h3 className='text-2xl font-bold leading-normal lg:text-4xl lg:mt-9 text-darkish-blue'>
        {subheader}
      </h3>
    </div>
  );
}
