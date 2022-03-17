import * as React from 'react';
import { GoPrimitiveDot } from 'react-icons/go';
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';

export default function EventCard({ title, imagePath, year, summary }) {
  const image = getImage(imagePath);
  // Uses a placeholder card while card component is not yet done
  return (
    <div className='bg-white rounded-b-3xl'>
      <hr className='top-0 w-full h-2 bg-standard-blue' />
      <div className='flex flex-col p-8 text-center '>
        <article className='flex flex-col gap-6'>
          <div className='flex flex-col gap-4'>
            <h4 className='text-2xl font-bold text-oxford-blue'>{title}</h4>
            <p className='text-xl font-thin text-maximum-blue-green'>{year}</p>
          </div>

          {/* PLACEHOLDER IMAGE */}
          <StaticImage src='../../images/home/Home-Event.jpg' />
          {/* <GatsbyImage image={image} alt={title} />  */}

          <p className='text-xl font-light text-rich-black'>{summary}</p>
        </article>

        <div className='flex flex-row justify-center mt-7 gap-x-4'>
          <GoPrimitiveDot />
          <GoPrimitiveDot />
          <GoPrimitiveDot />
        </div>
      </div>
    </div>
  );
}
