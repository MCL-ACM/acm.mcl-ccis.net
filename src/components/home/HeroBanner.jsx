import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import HeroBannerDecoration from './HeroBannerDecoration';

export default function HeroBanner() {
  return (
    <div className='relative w-full h-auto'>
      <HeroBannerDecoration className='absolute bottom-0 z-10' />
      <StaticImage
        src='../../images/home/Home-Banner.jpg'
        alt='Website banner'
      />
    </div>
  );
}
