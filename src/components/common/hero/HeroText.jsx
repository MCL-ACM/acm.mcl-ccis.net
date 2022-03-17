import React from 'react';

export default function HeroText({ header, subheader, className }) {
  return (
    <div className={`px-5 text-right py-7 ${className}`}>
      <h1 className='text-4xl font-bold leading-snug text-oxford-blue'>
        {header}
      </h1>
      <h3 className='text-2xl font-bold leading-normal text-darkish-blue'>
        {subheader}
      </h3>
    </div>
  );
}
