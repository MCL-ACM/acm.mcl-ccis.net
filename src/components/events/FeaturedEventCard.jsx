import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import FeaturedEventDetails from './FeaturedEventDetails';

export default function FeaturedEventCard() {
  return (
    <article className='max-w-[735px] min-w-[735px] min-h-[565px] h-[565px] relative'>
      <FeaturedEventDetails />
      <StaticImage
        src='../../images/home/Home-Event.jpg'
        alt=''
        width='415'
        height='530'
        className='bottom-0 right-0 absolute'
      />
    </article>
  );
}
