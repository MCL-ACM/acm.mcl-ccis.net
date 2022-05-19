import React from 'react';

export default function ImageWithCaption({
  image,
  message,
  hiddenMobile,
  className,
}) {
  const hidden = hiddenMobile ? 'hidden sm:block' : 'block';
  return (
    <div className={`relative ${className}`}>
      {image}
      <div
        className={`absolute text-xs bg-white rounded-full bottom-3 right-3 bg-opacity-80 ${hidden}`}
      >
        <div className='flex flex-row items-center gap-1.5 px-2'>
          <p className='py-2'>{message}</p>
        </div>
      </div>
    </div>
  );
}
