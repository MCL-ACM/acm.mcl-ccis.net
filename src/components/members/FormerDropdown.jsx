import React from 'react';
import './../../styles/CustomSelectStyle.css';

import { GoTriangleDown } from 'react-icons/go';

export default function FormerDropdown({
  schoolYears,
  selectedYear,
  setSelectedYear,
}) {
  const handleChange = (event) => {
    setSelectedYear(event.target.value);
  };

  return (
    <div className='member-select-container'>
      <select
        value={selectedYear}
        onChange={handleChange}
        className='appearance-none text-1xl lg:text-2xl font-light bg-[#212840] text-white font-inter rounded-full py-2 pl-10 pe-16'
      >
        {schoolYears.map((year) => (
          <option value={year.value} key={year.value}>
            {year.label}
          </option>
        ))}
      </select>
      <GoTriangleDown className='arrow-icon text-white text-1xl lg:text-2xl' />
    </div>
  );
}
