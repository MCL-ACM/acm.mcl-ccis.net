import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export default function MemberInfo({ name, position, photo, alt, className }) {
  const image = getImage(photo);
  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      {photo && (
        <GatsbyImage
          image={image}
          alt={name}
          className='w-20 h-20 mb-3 lg:w-32 lg:h-32 hexagon-frame '
        />
      )}
      <p className='text-lg lg:text-lg text-rich-black'>{name}</p>
      <p className='text-cyan-800 font-normal'>{position}</p>
    </div>
  );
}
