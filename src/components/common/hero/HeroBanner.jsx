import * as React from 'react';
import HeroBannerDecoration from './HeroBannerDecoration';

export default function HeroBanner({ image, className }) {
  return (
    <div className={`relative w-full h-auto ${className}`}>
      <HeroBannerDecoration className='absolute z-10 w-[101%] -bottom-[2px] sm:hidden' />
      {image}
    </div>
  );
}
