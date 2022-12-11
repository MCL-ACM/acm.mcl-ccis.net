import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

export default function Logo() {
  return (
    <StaticImage
      src='../../../images/navbar/acm_chapter_logo.png'
      alt='MCL-ACM logo'
      className='w-[40px] h-[40px] sm:w-[76px] sm:h-[76px]'
    />
  );
}
