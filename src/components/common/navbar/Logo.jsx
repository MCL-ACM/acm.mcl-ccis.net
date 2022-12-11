import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

export default function Logo() {
  return (
    <StaticImage
      src='../../../images/navbar/mcl-acm_logo.png'
      alt='MCL-ACM logo'
      className='w-[78px] h-[40px] sm:w-[150px] sm:h-[76px]'
    />
  );
}
