import React from 'react';

export default function HeroHeadingText({ header, subheader, className }) {
  return (
    <div
      className={`flex flex-col px-5 text-right lg:text-center py-7 lg:py-0 ${className}`}
    >
      <h1 className='text-4xl font-bold leading-snug lg:text-5xl text-oxford-blue'>
        {header}
      </h1>
      <h3 className='text-2xl font-bold leading-normal lg:text-3xl lg:mt-4 text-darkish-blue'>
        {subheader}
      </h3>
    </div>
  );
}
