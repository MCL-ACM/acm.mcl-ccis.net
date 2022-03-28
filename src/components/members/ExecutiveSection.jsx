import React from 'react';
import MemberInfo from './MemberInfo';
import MemberSection from './MemberSection';

export default function ExecutiveSection({ officers }) {
  return (
    <MemberSection header='Executive Committee'>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-y-8 lg:gap-y-14'>
        {officers.map(({ name, position, photo }, index) => (
          <div
            className={`flex flex-col items-center ${
              index === 0 && 'col-span-2 lg:col-span-4'
            }`}
          >
            <MemberInfo name={name} position={position} photo={photo} />
          </div>
        ))}
      </div>
    </MemberSection>
  );
}
