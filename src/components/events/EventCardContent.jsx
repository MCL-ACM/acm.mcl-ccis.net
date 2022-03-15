import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export default function EventCardContent({
  tagged,
  tags,
  title,
  year,
  img,
  imageAlt,
  description,
}) {
  const gImage = getImage(img);

  return (
    <div className='absolute flex flex-col items-center w-full gap-6 align-middle px-9'>
      {tagged && (
        <ul className='absolute flex flex-wrap w-full space-x-3 pt-7 px-9'>
          {tags.map((tag) => (
            <li
              key={tag}
              className='bg-standard-blue text-white font-bold text-xs py-[4px] px-[10px] rounded-lg'
            >
              {tag.toUpperCase()}
            </li>
          ))}
        </ul>
      )}

      <header className='flex flex-col gap-2 text-center pt-[72px]'>
        <h1 className='text-lg font-bold text-oxford-blue'>{title}</h1>
        <h5 className='text-base font-light text-maximum-blue-green'>{year}</h5>
      </header>
      <GatsbyImage image={gImage} alt={imageAlt} />
      <p className='text-sm font-light text-center text-rich-black'>
        {description}
      </p>
    </div>
  );
}
