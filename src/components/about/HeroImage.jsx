import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import background from '../../images/about/about_us.png';
import HeroDecorationDots from './HeroDecorationDots';

export default function HeroImage() {
  return (
    <div>
      <div
        className='h-80 bg-top bg-cover relative lg:hidden'
        style={{ backgroundImage: `url(${background})` }}
      >
        <svg
          viewBox='0 0 375 32'
          className='w-full absolute bottom-0 lg:hidden'
        >
          <path
            d='M0 32.0001H375V0.616211C375 0.616211 110 32.0001 98 32.0001C86 32.0001 0 0.616211 0 0.616211V32.0001Z'
            fill='#FFFFFF'
          />
        </svg>
      </div>

      <div className='mt-16 hidden lg:block'>
        <div className='margin-auto'>
          <StaticImage
            src='../../images/about/about_us.png'
            alt=''
            className='ml-10 mt-20'
          />
        </div>
        <HeroDecorationDots className='absolute top-52 -z-10' />
      </div>
    </div>
  );
}
