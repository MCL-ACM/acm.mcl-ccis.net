import React from 'react';

export default function MemberSection({ header, children }) {
  return (
    <div>
      <hr className='sm:hidden h-1 shadow-lg shadow-blue-500/90 bg-gradient-to-tr from-standard-blue to-cerulean-crayola' />
      <div className='mt-4 mb-8 sm:mb-14'>
        <h3 className='sm:mb-8 text-2xl font-bold text-center text-oxford-blue sm:text-5xl sm:text-left'>
          {header}
        </h3>
        <hr className='hidden sm:block h-1 shadow-lg shadow-blue-500/90 bg-gradient-to-tr from-standard-blue to-cerulean-crayola' />
      </div>

      {children}
    </div>
  );
}
