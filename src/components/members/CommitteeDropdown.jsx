import React from 'react';
import './../../styles/CustomSelectStyle.css';

import { GoTriangleDown } from 'react-icons/go';

const committeeOptions = [
  { value: 'Executive Committee', label: 'Executive' },
  { value: 'Finance Committee', label: 'Finance' },
  { value: 'Membership Committee', label: 'Membership' },
  { value: 'Publication Committee', label: 'Publication' },
  { value: 'Research and Development Committee', label: 'RnD' },
];

export default function CommitteeDropdown({
  selectedCommittee,
  setSelectedCommittee,
}) {
  const handleChange = (event) => {
    setSelectedCommittee(event.target.value);
  };

  return (
    <div className='member-select-container'>
      <select
        value={selectedCommittee}
        onChange={handleChange}
        className='appearance-none text-1xl lg:text-2xl font-light bg-[#212840] text-white font-inter rounded-full py-2 pl-10 pe-16'
      >
        {committeeOptions.map((committee) => (
          <option value={committee.value} key={committee.value}>
            {committee.label}
          </option>
        ))}
      </select>
      <GoTriangleDown className='arrow-icon text-white text-1xl lg:text-2xl' />
    </div>
  );
}
