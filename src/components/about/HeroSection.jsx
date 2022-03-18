import React from 'react';
import background from '../../images/about/about_us.png';

export default function HeroSection() {
  return (
    <div className=''>
      <div
        className='h-80 bg-top bg-cover relative'
        style={{ backgroundImage: `url(${background})` }}
      >
        <svg viewBox='0 0 375 32' className='w-full absolute bottom-0'>
          <path
            d='M0 32.0001H375V0.616211C375 0.616211 110 32.0001 98 32.0001C86 32.0001 0 0.616211 0 0.616211V32.0001Z'
            fill='#FFFFFF'
          />
        </svg>
      </div>

      <div className='text-right py-7 px-5'>
        <h1 className='text-4xl font-bold leading-snug text-oxford-blue'>
          A Student Chapter of ACM
        </h1>
        <h3 className='text-2xl font-bold leading-normal text-darkish-blue'>
          About us
        </h3>
      </div>
    </div>
  );
}
