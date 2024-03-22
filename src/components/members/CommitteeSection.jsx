import React from 'react';
import MemberSection from './MemberSection';
import MemberInfo from './MemberInfo';

export default function CommitteeSection({ name, chair, cochair, members, memberspic }) {
  return (
    <MemberSection header={name}>
      <div className='flex flex-row flex-wrap justify-center gap-y-8 lg:gap-y-10'>
        <MemberInfo
          name={chair.name}
          position={chair.position}
          photo={chair.photo}
          className='w-full'
        />
        <MemberInfo
          name={cochair.name}
          position={cochair.position}
          photo={cochair.photo}
          className='w-full'
        />

        {members.map((memberName,index) => (
          <MemberInfo
            key={index}
            name={memberName}
            position='Member'
            photo={memberspic[index]}
            className='w-[50%] lg:w-[33%] '
          />
        ))}
      </div>
    </MemberSection>
  );
}
