import React, { useState, useEffect } from 'react';
import { Button } from 'semantic-ui-react';
import { fetchAllMembers } from '../commonMethods';
import { API_ADD_SINGLE_CONTRIBUTIONS } from '../api';

export default function SingleUploadForm() {
  const [membersData, setMembersData] = useState([]);
  const [selectedMember, setSelectedMember] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);

  const [singleUploadMessage, setSingleUploadMessage] = useState(null);
  const [responseStatus, setResponseStatus] = useState(null);

  const [buttonInteractable, setButtonInteractable] = useState(false);

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAllMembers();
        setMembersData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  const currentYear = new Date().getFullYear();
  const years = Array.from(
    { length: currentYear - 2017 },
    (_, index) => currentYear - index,
  );

  useEffect(() => {
    if (selectedMember && selectedMonth && selectedYear) {
      setButtonInteractable(true);
    } else {
      setButtonInteractable(false);
    }
  }, [selectedMember, selectedMonth, selectedYear]);

  async function singleUploadSubmit() {
    const data = {
      memberName: selectedMember,
      month: selectedMonth,
      year: selectedYear,
    };
    const response = await fetch(API_ADD_SINGLE_CONTRIBUTIONS, {
      method: 'POST',
      body: JSON.stringify(data),
    });

    const jsonResponse = await response.json();
    setSingleUploadMessage(jsonResponse.message);
    setResponseStatus(response.status);
  }

  return (
    <div className='w-1/2 space-y-5' style={{ backgroundColor: '#00FFF' }}>
      <h2 className='text-2xl font-bold' style={{ color: '#000080' }}>
        Single Upload
      </h2>
      <h3 className='text-1xl'>Member name</h3>
      <select
        id='member'
        value={selectedMember}
        onChange={(e) => setSelectedMember(e.target.value)}
        className='p-2 bg-gray-100 w-60'
      >
        {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
        <option value='' />
        {membersData.map((member) => (
          <option key={member} value={member}>
            {member}
          </option>
        ))}
      </select>
      <h3 className='text-1xl'>Month</h3>
      <select
        id='month'
        value={selectedMonth}
        onChange={(e) => setSelectedMonth(e.target.value)}
        className='p-2 bg-gray-100 w-60'
      >
        {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
        <option value='' />
        {months.map((month, index) => (
          <option key={month} value={index + 1}>
            {month}
          </option>
        ))}
      </select>

      <h3 className='text-1xl'>Year</h3>

      <select
        id='year'
        value={selectedYear}
        onChange={(e) => setSelectedYear(e.target.value)}
        className='p-2 bg-gray-100 w-60'
      >
        {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
        <option value='' />
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
      <div>
        <Button
          className={`${
            buttonInteractable
              ? 'bg-green-500 hover:bg-green-700'
              : 'bg-gray-400'
          } text-white font-bold py-2 px-4 rounded`}
          onClick={() => singleUploadSubmit()}
          disabled={!buttonInteractable}
        >
          Submit
        </Button>
      </div>
      <h3
        className={`text-1xl h-0 ${
          responseStatus === 200 ? 'text-green-500' : 'text-red-500'
        }`}
      >
        {singleUploadMessage}
      </h3>
    </div>
  );
}
