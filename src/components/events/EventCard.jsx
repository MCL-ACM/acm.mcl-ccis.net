import React from 'react';
import Divider from '../common/Divider';

export default function EventCard({ children }) {
  return (
    <article className='items-center w-[20.9375em] h-[34.25em] relative rounded-bl-3xl rounded-br-3xl border-[0.55px] border-gray-200 overflow-hidden bg-white'>
      <Divider className='h-[4px]' />
      {children}
    </article>
  );
}
