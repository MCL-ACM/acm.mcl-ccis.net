  import React, { useState, useEffect } from 'react';
  import Head from '../../components/common/Head';
  import { setContributionData } from '../../components/admin/contributionMethods';

  export default function ContributionsPage() {
    const [selectedMember, setSelectedMember] = useState('');
    const [selectedMonth, setSelectedMonth] = useState('');
    const [selectedYear, setSelectedYear] = useState('');
    const [fileData, setFileData] = useState(null); // State to store file data
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];

    useEffect(() => {
      setContributionData();
    }, []);

    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: currentYear - 2017 }, (_, index) => currentYear - index);

    // Function to handle file upload
    const handleFileUpload = (event) => {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        setFileData(e.target.result); // Store file data in state
      };
      reader.readAsText(file);
    };

    // Function to handle form submission
    const handleSubmit = (type) => {
      if (type === 'data') {
        // Prepare data for submission (member, month, year)
        const data = {
          member: selectedMember,
          month: selectedMonth,
          year: selectedYear
        };
        console.log('Submitted Data:', data);
        // Send data to the backend or perform other actions
      } else if (type === 'file') {
        // Process file data here (e.g., parse as JSON)
        if (fileData) {
          try {
            const jsonData = JSON.parse(fileData);
            console.log('File data (JSON):', jsonData);
            // Send jsonData to the backend or perform other actions
          } catch (error) {
            console.error('Error parsing file data:', error);
          }
        }
      }
    };

    return (
      <div className='w-full lg:mt-[4.8125em] relative pb-[9.25em] text-center'>
        <Head title='Contribution Manager' />
        <h1 className="font-bold text-3xl py-2 mx-auto mb-4 max-w-full w-full" style={{ color: '#000080' }} >
          Contributions
        </h1>

        <div className="mt-10 flex justify-center">
          <div className="w-1/2 p-4 pr-2 border-r border-gray-400" style={{ backgroundColor: '#00FFF' }}>
            <h2 className="text-2xl font-bold" style={{ color: '#000080' }}>Single Upload</h2>
            <div>
              <h3 className="mt-5 text-1xl">Member name</h3>
              <select
                id="member"
                value={selectedMember}
                onChange={(e) => setSelectedMember(e.target.value)}
                className="p-2 bg-gray-100 w-60"
              >
                <option value=""> </option>
              </select>
            </div>
            <div>
              <h3 className="mt-4 text-1xl">Month</h3>
              <select
                id="month"
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                className="p-2 bg-gray-100 w-60"
              >
                <option value=""></option>
                {months.map((month, index) => (
                  <option key={index} value={month}>{month}</option>
                ))}
              </select>
            </div>
            <div>
              <h3 className="mt-4 text-1xl">Year</h3>
              <select
                id="year"
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="p-2 bg-gray-100 w-60"
              >
                <option value=""> </option>
                {years.map((year, index) => (
                  <option key={index} value={year}>{year}</option>
                ))}
              </select>
            </div>
            <button className="mt-6 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleSubmit('data')}>
              Submit
            </button>
          </div>
          <div className="w-1/2 p-4 pl-2 rounded-lg" style={{ backgroundColor: '#00FFF' }}>
            <h2 className="text-2xl font-bold" style={{ color: '#000080' }}>Batch Upload</h2>
            <div>
              <input type="file" className="mt-10 p-2 bg-gray-100" onChange={handleFileUpload} />
            </div>
            <button className="mt-10 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleSubmit('file')}>
              Upload File
            </button>
          </div>
        </div>
      </div>
    );
  }
