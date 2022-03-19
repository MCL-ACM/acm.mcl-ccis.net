import React from 'react';

export default function MemberSection({ header, children }) {
  return (
    <div>
      <hr className='h-1 shadow-lg sm:hidden shadow-blue-500/90 bg-gradient-to-tr from-standard-blue to-cerulean-crayola' />
      <div className='mt-4 mb-8 sm:mb-16'>
        <h3 className='text-2xl font-bold text-center sm:mb-8 text-oxford-blue sm:text-5xl sm:text-left'>
          {header}
        </h3>
        <hr className='hidden h-1 shadow-lg sm:block shadow-blue-500/90 bg-gradient-to-tr from-standard-blue to-cerulean-crayola' />
      </div>

      {children}
    </div>
  );
}
