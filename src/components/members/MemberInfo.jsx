import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export default function MemberInfo({ name, position, photo, alt, className }) {
  const image = getImage(photo);
  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      {photo && (
        <GatsbyImage
          image={image}
          alt={alt}
          className='w-24 h-24 mb-3 rounded-full lg:w-36 lg:h-36'
        />
      )}
      <p className='text-lg text-oxford-blue lg:text-xl'>{name}</p>
      <p className='font-light text-oxford-blue lg:text-lg'>{position}</p>
    </div>
  );
}
