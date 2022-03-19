import React from 'react';
import HeroBannerDecoration from './HeroBannerDecoration';

export default function HeroBanner({ image }) {
  return (
    <div className='relative w-full lg:mt-16'>
      <div className=''>{image}</div>
      <HeroBannerDecoration className='absolute lg:hidden w-[101%] -bottom-[2px]' />
    </div>
  );
}
