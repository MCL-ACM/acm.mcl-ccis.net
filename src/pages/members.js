import React from 'react';
import CommitteeSection from '../components/members/CommitteeSection';
import ExecutiveSection from '../components/members/ExecutiveSection';
import MembersHeader from '../components/members/MembersHeader';

export default function members() {
  const executiveCommittee = [
    { photo: '', name: 'Khristian Kikuchi', position: 'Adviser' },
    { photo: '', name: 'James Michael Paz', position: 'President' },
    { photo: '', name: 'Karlo Miguel Palisoc', position: 'Vice President' },
    { photo: '', name: 'Jayvee Mapote', position: 'Secretary' },
    { photo: '', name: 'Patrick Mediodia', position: 'Treasurer' },
  ];

  const committees = [
    {
      name: 'Research and Development Committee',
      chair: {
        photo: '',
        name: 'Job Lipat',
        position: 'RND Committee Chair',
      },
      memberNames: [
        'First Name Last Name',
        'First Name Last Name',
        'First Name Last Name',
        'First Name Last Name',
      ],
    },
    {
      name: 'Membership Committee',
      chair: {
        photo: '',
        name: 'John Arthur Panti',
        position: 'Membership Committee Chair',
      },
      memberNames: [
        'First Name Last Name',
        'First Name Last Name',
        'First Name Last Name',
        'First Name Last Name',
      ],
    },
  ];
  return (
    <div className='flex flex-col gap-20 px-5 mb-24'>
      <MembersHeader />
      <ExecutiveSection officers={executiveCommittee} />
      {committees.map(({ name, chair, memberNames }) => (
        <CommitteeSection name={name} chair={chair} memberNames={memberNames} />
      ))}
    </div>
  );
}
