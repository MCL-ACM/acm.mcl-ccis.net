import React from 'react';

export default function MemberSection({ header, children }) {
  return (
    <div>
      <hr className='h-1 shadow-lg lg:hidden shadow-blue-500/90 bg-gradient-to-tr from-standard-blue to-cerulean-crayola' />
      <div className='mt-4 mb-8 lg:mb-12'>
        <h3 className='text-2xl font-bold text-center lg:mb-4 text-oxford-blue lg:text-4xl lg:text-left'>
          {header}
        </h3>
        <hr className='hidden h-1 shadow-lg lg:block shadow-blue-500/90 bg-gradient-to-tr from-standard-blue to-cerulean-crayola' />
      </div>

      {children}
    </div>
  );
}
