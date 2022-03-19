import React from 'react';
import MemberSection from './MemberSection';
import MemberInfo from './MemberInfo';
import tempPhoto from '../../images/members/dog.jpg';

export default function CommitteeSection({ name, chair, members }) {
  return (
    <MemberSection header={name}>
      <div className='flex flex-row flex-wrap justify-center gap-y-8 sm:gap-y-14'>
        <MemberInfo
          name={chair.name}
          position={chair.position}
          photo={tempPhoto}
          className='w-full'
        />

        {members.map((memberName) => (
          <MemberInfo
            name={memberName}
            position='Member'
            className='w-[50%] sm:w-[33%]'
          />
        ))}
      </div>
    </MemberSection>
  );
}
