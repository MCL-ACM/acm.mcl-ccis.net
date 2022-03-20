import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import EventImageSlideshow from './EventImageSlideshow';
import sampleIMG from '../../images/home/Home-About.jpg';

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
    <div className='w-screen top-0 h-screen fixed bg-black z-10 text-white flex flex-col'>
      <div className='absolute top-0 right-0 z-40 pt-4 pr-4'>
        <button type='button' className='left-0' onClick={toggle}>
          <AiOutlineClose color='red' fontSize='1.5em' />
        </button>
      </div>

      <div className='h-full flex flex-col justify-between'>
        <EventImageSlideshow images={images} />

        <div className='px-6 flex flex-col justify-between mb-8 sm:flex-row sm:pr-9'>
          <div>
            <h1 className='text-lg font-bold'>{title}</h1>
            <h5 className='text-maximum-blue-green'>{year}</h5>
            <ul className=''>{tags}</ul>{' '}
          </div>

          <div className='sm:max-w-[50%] sm:text-right'>
            <p className='font-light'>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
