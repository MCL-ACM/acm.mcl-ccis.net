import React from 'react';
import { GrCircleInformation } from 'react-icons/gr';

export default function ImageWithInformation({ image, message, hiddenMobile }) {
  const hidden = hiddenMobile ? 'hidden sm:block' : 'block';
  return (
    <div className='relative'>
      {image}
      <div
        className={`absolute text-xs bg-white rounded-full bottom-3 right-3 bg-opacity-80 ${hidden}`}
      >
        <div className='flex flex-row items-center gap-1.5 px-2'>
          <GrCircleInformation size='1.4em' className='' />
          <p className='py-2'>{message}</p>
        </div>
      </div>
    </div>
  );
}
