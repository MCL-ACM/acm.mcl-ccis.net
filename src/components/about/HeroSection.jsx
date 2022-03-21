import React from 'react';
import HeroBodyText from './HeroBodyText';
import HeroHeadingText from './HeroHeadingText';
import HeroImage from './HeroImage';

export default function HeroSection() {
  return (
    <div className='flex flex-col lg:gap-16 fixed-width'>
      <HeroImage />
      <HeroHeadingText />
      <HeroBodyText className='hidden lg:block' />
    </div>
  );
}
