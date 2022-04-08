import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import EventTags from '../EventTags';
import DEventImageSlideshow from './DEventImageSlideshow';

export default function EventModal({ event, tagged, toggle }) {
  const { title, year, tags, description, images } = event;

  return (
    <div className='absolute'>
      <div
        className='fixed w-screen h-screen inset-0 z-50 bg-black opacity-75'
        onClick={toggle}
      />

      <div className='fixed max-w-[1020px] max-h-[844px] m-auto inset-0 z-50 flex flex-col justify-center items-center'>
        <div className='bg-white max-w-[1020px] w-full h-[844px] text-left rounded-3xl flex flex-col pt-7 gap-y-5 border-2 shadow-2xl z-50 shadow-sky-200'>
          <div className='flex flex-col gap-y-4 px-24'>
            <button
              type='button'
              className='max-w-full flex justify-center ml-auto absolute right-10'
              onClick={toggle}
            >
              <div className='w-full h-full'>
                <AiOutlineClose color='red' fontSize='1.5em' className='' />
              </div>
            </button>
            <div className='flex w-full justify-between'>
              <h1 className='text-3xl font-bold text-oxford-blue leading-snug max-w-[70%]'>
                {title}
              </h1>
              <div className='flex gap-y-3 flex-col pr-9'>
                <p className='text-lg font-light text-maximum-blue-green'>
                  {year}
                </p>
                <div>{tagged && <EventTags tags={tags} />}</div>
              </div>
            </div>

            <p className='text-sm text-justify break-words overflow-y-scroll max-h-24 no-scrollbar'>
              {description}
            </p>
          </div>
          <div className='flex flex-col w-full h-full relative px-20 overflow-x-scroll no-scrollbar'>
            <DEventImageSlideshow images={images} />
          </div>
        </div>
      </div>
    </div>
  );
}
