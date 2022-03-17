import React from 'react';
import MemberSection from './MemberSection';
import MemberInfo from './MemberInfo';
import tempPhoto from '../../images/members/dog.jpg';

export default function CommitteeSection({ name, chair, members }) {
  return (
    <MemberSection header={name}>
      <div className='grid grid-cols-2 gap-y-8'>
        <MemberInfo
          name={chair.name}
          position={chair.position}
          photo={tempPhoto}
          className='col-span-2'
        />

        {members.map((memberName) => (
          <MemberInfo name={memberName} position='Member' />
        ))}
      </div>
    </MemberSection>
  );
}