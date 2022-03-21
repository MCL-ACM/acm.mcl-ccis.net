import React from 'react';

export default function EventCardBackground({ shadow, children }) {
  return (
    <article
      className={`${
        shadow && 'shadow-xl'
      } w-[20.9375em] h-[34.25em] relative rounded-bl-3xl rounded-br-3xl border-[0.55px] border-gray-200 overflow-hidden bg-white`}
    >
      <span className='absolute block w-full h-[4px] bg-gradient-to-r from-cerulean-crayola to-standard-blue' />
      {children}
    </article>
  );
}
