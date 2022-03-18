import React from 'react';

export default function MemberInfo({ name, position, photo, alt, className }) {
  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      {photo && (
        <img
          src={photo}
          alt={alt}
          className='w-24 h-24 sm:w-36 sm:h-36 mb-3 rounded-full'
        />
      )}
      <p className='text-lg text-oxford-blue sm:text-xl'>{name}</p>
      <p className='font-light text-oxford-blue sm:text-lg'>{position}</p>
    </div>
  );
}
