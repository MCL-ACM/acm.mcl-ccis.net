import React from 'react';
import CommitteeSection from '../components/members/CommitteeSection';
import ExecutiveSection from '../components/members/ExecutiveSection';
import MembersHeader from '../components/members/MembersHeader';

export default function members() {
  const executiveCommittee = [
    { photo: '', name: '', position: '' },
    { photo: '', name: '', position: '' },
    { photo: '', name: '', position: '' },
    { photo: '', name: '', position: '' },
  ];

  const committees = [
    {
      chair: {
        photo: '',
        name: '',
      },
      memberNames: [],
    },
  ];
  return (
    <div className='flex flex-col gap-2'>
      <MembersHeader />
      <ExecutiveSection officers={executiveCommittee} />
      {committees.map(({ chair, memberNames }) => (
        <CommitteeSection chair={chair} memberNames={memberNames} />
      ))}
    </div>
  );
}
