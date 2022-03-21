import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import EventImageSlideshow from './EventImageSlideshow';
import sampleIMG from '../../images/home/Home-About.jpg';
import EventTags from './EventTags';

export default function EventModal({ toggle, event }) {
  const { title, tags, year, description } = event;
  const images = [
    sampleIMG,
    sampleIMG,
    sampleIMG,
    sampleIMG,
    sampleIMG,
    sampleIMG,
    sampleIMG,
    sampleIMG,
    sampleIMG,
    sampleIMG,
    sampleIMG,
    sampleIMG,
    sampleIMG,
    sampleIMG,
    sampleIMG,
    sampleIMG,
    sampleIMG,
    sampleIMG,
    sampleIMG,
    sampleIMG,
  ];
  return (
    <div className='fixed top-0 z-10 flex flex-col w-screen h-screen text-white bg-black'>
      <div className='absolute top-0 right-0 z-40 pt-4 pr-4'>
        <button type='button' className='left-0' onClick={toggle}>
          <AiOutlineClose color='red' fontSize='1.5em' />
        </button>
      </div>

      <div className='flex flex-col h-full'>
        <div className='h-[55%] mb-10 overflow-hidden'>
          <EventImageSlideshow images={images} />
        </div>
        <div className='flex flex-col px-6 mb-8 sm:flex-row fixed-width sm:gap-8'>
          <div>
            <h1 className='text-lg font-bold'>{title}</h1>
            <h5 className='text-maximum-blue-green'>{year}</h5>
            <EventTags tags={tags} className='my-4' />
          </div>

          <div className='sm:max-w-[50%] sm:text-right sm:ml-auto'>
            <p className='font-light'>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
