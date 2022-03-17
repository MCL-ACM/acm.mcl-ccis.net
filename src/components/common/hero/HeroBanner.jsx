import * as React from 'react';
import HeroBannerDecoration from './HeroBannerDecoration';

export default function HeroBanner({ image }) {
  return (
    <div className='relative w-full h-auto'>
      {image}
      <HeroBannerDecoration className='absolute w-[101%] -bottom-[2px]' />
    </div>
  );
}
