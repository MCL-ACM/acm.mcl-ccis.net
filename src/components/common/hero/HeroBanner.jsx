import React from 'react';
import DotsRowSmallDecoration from '../decorations/DotsRowSmallDecoration';
import SquareDotsDecoration from '../decorations/SquareDotsDecoration';
import HeroBannerDecoration from './HeroBannerDecoration';

export default function HeroBanner({ image, homePage }) {
  return (
    <div className='relative lg:m-10 lg:mt-14'>
      {image}
      {!homePage && (
        <DotsRowSmallDecoration className='hidden lg:block lg:absolute -top-14 -left-10 max-w-2 max-h-2' />
      )}

      <SquareDotsDecoration className='text-cerulean-crayola hidden lg:block lg:absolute -top-10 -right-10 max-w-[60%] max-h-[60%] z-[-1]' />
      <SquareDotsDecoration className='text-cerulean-crayola hidden lg:block lg:absolute -bottom-10 -left-10 max-w-[60%] max-h-[60%] z-[-1]' />
      <HeroBannerDecoration className='absolute lg:hidden w-[100%] -bottom-[2px]' />
    </div>
  );
}
