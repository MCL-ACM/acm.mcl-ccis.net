import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import EventImageSlideshow from './EventImageSlideshow';
import EventTags from './EventTags';

export default function EventModal({ toggle, event }) {
  const { title, tags, year, description, images } = event;

  return (
    <div className='fixed top-0 z-10 flex flex-col w-screen h-screen text-white bg-black'>
      <div className='absolute right-0 z-40 pt-4 pr-4'>
        <button type='button' className='left-0' onClick={toggle}>
          <AiOutlineClose color='red' fontSize='1.5em' />
        </button>
      </div>

      <div className='flex flex-col h-full justify-between'>
        <EventImageSlideshow images={images} />

        <div className='flex flex-col px-6 sm:flex-row fixed-width sm:gap-8 sm:items-center'>
          <div>
            <h1 className='text-lg sm:text-base font-bold'>{title}</h1>
            <h5 className='text-maximum-blue-green sm:text-sm'>{year}</h5>
            <EventTags tags={tags} className='my-4 sm:my-0' />
          </div>

          <div className='sm:max-w-[50%] sm:text-right sm:ml-auto py-6'>
            <p className='font-light sm:text-sm'>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
