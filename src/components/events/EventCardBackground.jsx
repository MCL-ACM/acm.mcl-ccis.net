import React from 'react';

export default function EventCardBackground({ shadow, children, className }) {
  const hasShadow = shadow ? 'shadow-xl' : '';

  return (
    <article
      className={`w-[20.9375em] h-[32em] relative rounded-bl-3xl rounded-br-3xl border-[0.55px] border-gray-200 overflow-hidden bg-white ${className} ${hasShadow}`}
    >
      <span className='absolute block w-full h-[4px] bg-gradient-to-r from-cerulean-crayola to-standard-blue' />
      {children}
    </article>
  );
}
