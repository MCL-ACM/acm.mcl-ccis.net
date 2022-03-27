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
  summary,
  linky,
}) {
  return (
    <div className='absolute flex flex-col items-center justify-between w-full h-full align-middle px-9'>
      <div className='flex flex-col items-center w-full h-full gap-3 break-words align-middle'>
        {tagged ? (
          <EventTags tags={tags} className="className='absolute pt-7 '" />
        ) : (
          <div className='pt-7' />
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
          className='aspect-[16/9] w-full'
        />
        <p className='w-full text-sm font-light text-center text-rich-black'>
          {summary.length > 180 ? `${summary.slice(0, 180)}. . . ` : summary}
        </p>
      </div>

      {linky ? (
        <div className='pb-5 text-lg underline text-darkish-blue'>
          View Details
        </div>
      ) : (
        <div />
      )}
    </div>
  );
}
