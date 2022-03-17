import * as React from 'react';
import HeroBannerDecoration from './HeroBannerDecoration';

export default function HeroBanner({ image }) {
  return (
    <div className='relative w-full h-auto'>
      <HeroBannerDecoration className='absolute z-10 w-[101%] -bottom-[2px]' />
      {image}
    </div>
  );
}
