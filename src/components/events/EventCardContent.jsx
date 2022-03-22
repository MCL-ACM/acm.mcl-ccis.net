import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import EventTags from './EventTags';

export default function EventCardContent({
  tagged,
  tags,
  title,
  year,
  img,
  imageAlt,
  description,
  linky,
}) {
  return (
    <div className='absolute flex flex-col items-center w-full align-middle px-9 justify-between h-full'>
      <div className='flex flex-col items-center w-full gap-6 align-middle'>
        {tagged && (
          <EventTags tags={tags} className="className='absolute pt-7 '" />
        )}
        <header className='flex flex-col gap-2 text-center'>
          <h1 className='text-lg font-bold text-oxford-blue'>{title}</h1>
          <h5 className='text-base font-light text-maximum-blue-green'>
            {year}
          </h5>
        </header>
        <GatsbyImage
          height='181px'
          width='263px'
          image={getImage(img)}
          alt={imageAlt}
        />
        <p className='text-sm font-light text-center text-rich-black'>
          {description}
        </p>
      </div>

      {linky ? (
        <div className='text-lg text-darkish-blue underline pb-5'>
          View Details
        </div>
      ) : (
        <div />
      )}
    </div>
  );
}
