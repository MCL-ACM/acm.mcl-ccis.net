import React from 'react';
import DotsRowSmallDecoration from '../decorations/DotsRowSmallDecoration';
import SquareDotsDecoration from '../decorations/SquareDotsDecoration';
import HeroBannerDecoration from './HeroBannerDecoration';

export default function HeroBanner({ image, className }) {
  return (
    <div className={`relative w-full h-auto ${className}`}>
      {image}
      <HeroBannerDecoration className='lg:hidden absolute w-[101%] -bottom-[2px]' />
    </div>
  );
}
