import React from 'react';

export default function MemberSection({ header, children }) {
  return (
    <div>
      <div>
        <hr className='h-1 shadow-lg shadow-blue-500/90 bg-gradient-to-tr from-standard-blue to-cerulean-crayola' />
      </div>
      <h3 className='mt-4 mb-8 text-2xl font-bold text-center text-oxford-blue'>
        {header}
      </h3>
      {children}
    </div>
  );
}
