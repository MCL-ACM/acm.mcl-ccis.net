import React from 'react';
import MemberInfo from './MemberInfo';
import MemberSection from './MemberSection';

export default function FormerOfficersSection() {
  const officersPerYear = [
    {
      year: 'A.Y. 2020-2021',
      officers: [
        {
          name: 'Job Lipat',
          position: 'President',
        },
        {
          name: 'Charmaine Eunice Rabano',
          position: 'Vice President',
        },
        {
          name: 'Elijah Raphael Garcia',
          position: 'Secretary',
        },
        {
          name: 'Sherald Ryoj Gurion',
          position: 'Treasurer',
        },
      ],
    },
    {
      year: 'A.Y. 2019-2020',
      officers: [
        {
          name: 'Donmarc Bryan Salcedo',
          position: 'President',
        },
        {
          name: 'Michael James Gnilo',
          position: 'Vice President',
        },
        {
          name: 'Gwyneth Escarda',
          position: 'Secretary and Treasurer',
        },
      ],
    },
    {
      year: 'A.Y. 2018-2019',
      officers: [
        {
          name: 'John Disonglo',
          position: 'President',
        },
        {
          name: 'John Noel Corpuz',
          position: 'Vice President',
        },
        {
          name: 'Angelo Alvarez',
          position: 'Secretary',
        },
        {
          name: 'Gwyneth Escarda',
          position: 'Treasurer',
        },
      ],
    },
  ];

  return (
    <div>
      <MemberSection header='Former officers'>
        <div className='gap-y-8 lg:gap-y-10 text-oxford-blue'>
          {officersPerYear.map(({ year, officers }) => (
            <div className='mb-12'>
              <div className='flex flex-col flex-wrap items-center lg:flex-row'>
                <p className='mb-4 text-xl font-bold text-center lg:w-[20%]'>
                  {year}
                </p>

                {officers.map((member) => (
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
