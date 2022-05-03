import React from 'react';
import MemberSection from './MemberSection';
import MemberInfo from './MemberInfo';

export default function CommitteeSection({ name, chair, members }) {
  return (
    <MemberSection header={name}>
      <div className='flex flex-row flex-wrap justify-center gap-y-8 lg:gap-y-10'>
        <MemberInfo
          name={chair.name}
          position={chair.position}
          photo={chair.photo}
          className='w-full'
        />

        {members.map((memberName) => (
          <MemberInfo
            name={memberName}
            position='Member'
            className='w-[50%] lg:w-[33%] '
          />
        ))}
      </div>
    </MemberSection>
  );
}
