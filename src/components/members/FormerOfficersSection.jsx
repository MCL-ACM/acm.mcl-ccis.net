import React from 'react';
import MemberInfo from './MemberInfo';
import MemberSection from './MemberSection';

export default function FormerOfficersSection({ formerOfficers }) {
  return (
    <div>
      <MemberSection header='Former Officers'>
        <div className='gap-y-8 lg:gap-y-10 text-oxford-blue'>
          {formerOfficers.map(officerSet => (
            <div className='mb-12'>
              <div className='flex flex-col flex-wrap items-center lg:flex-row'>
                <p className='mb-4 text-xl font-bold text-center lg:w-[20%]'>
                  {officerSet.node.year}
                </p>

                {officerSet.node.officers.map((member) => (
                  <MemberInfo
                    name={member.name}
                    position={`${member.position}`}
                    className='lg:w-[20%] mt-3'
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </MemberSection>
    </div>
  );
}
