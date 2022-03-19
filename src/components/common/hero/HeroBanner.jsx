import React from 'react';
import DotsRowSmallDecoration from '../decorations/DotsRowSmallDecoration';
import SquareDotsDecoration from '../decorations/SquareDotsDecoration';
import HeroBannerDecoration from './HeroBannerDecoration';

export default function HeroBanner({ image }) {
  return (
    <div className='relative w-full lg:mt-16'>
      <div className=''>{image}</div>

      <DotsRowSmallDecoration className='hidden sm:block sm:absolute -top-8 -left-10 max-w-2.5 max-h-2.5' />
      <SquareDotsDecoration className='text-cerulean-crayola hidden sm:block sm:absolute -top-10 -right-10 max-w-72 max-h-72 z-[-1]' />
      <SquareDotsDecoration className='text-cerulean-crayola hidden sm:block sm:absolute -bottom-10 -left-10 max-w-72 max-h-72 z-[-1]' />
      <HeroBannerDecoration className='absolute lg:hidden w-[101%] -bottom-[2px]' />
    </div>
  );
}
