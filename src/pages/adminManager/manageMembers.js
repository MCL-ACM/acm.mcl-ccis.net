import React, { useState } from 'react';
import Head from '../../components/common/Head';

export default function ManageMembersPage() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    committee: '',
    position: '',
    yearLevel: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, name, committee, position, yearLevel } = formData;
    if (!email || !name || !committee || !position || !yearLevel) {
      alert('Please fill out all fields before submitting the form.');
      return;
    }
    console.log(JSON.stringify(formData)); // Log form data (json)
  };

  return (
    <div className='min-h-screen flex justify-center items-center bg-black-100'>
      <Head title='Member Manager' />
      <div className='w-full max-w-md bg-white p-6 rounded-lg shadow-lg'>
        <h1 className='text-center mb-6 text-2xl font-bold text-blue-900'>Manage Members</h1>
        <form onSubmit={handleSubmit} className='flex flex-col space-y-4'>
          <div>
            <label className='block mb-1 text-blue-900'>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className='w-full px-4 py-2 border border-blue-300 rounded bg-blue-50 text-blue-900'
            />
          </div>
          <div>
            <label className='block mb-1 text-blue-900'>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className='w-full px-4 py-2 border border-blue-300 rounded bg-blue-50 text-blue-900'
            />
          </div>
          <div>
            <label className='block mb-1 text-blue-900'>Committee:</label>
            <select
              name="committee"
              value={formData.committee}
              onChange={handleChange}
              required
              className='w-full px-4 py-2 border border-blue-300 rounded bg-blue-50 text-blue-900'
            >
              <option value="">Select Committee</option>
              <option value="Research and Development">Research and Development</option>
              <option value="Publication">Publication</option>
              <option value="Membership">Membership</option>
              <option value="Executive">Executive</option>
              <option value="Finance">Finance</option>
            </select>
          </div>
          <div>
            <label className='block mb-1 text-blue-900'>Position:</label>
            <select
              name="position"
              value={formData.position}
              onChange={handleChange}
              required
              className='w-full px-4 py-2 border border-blue-300 rounded bg-blue-50 text-blue-900'
            >
              <option value="">Select Position</option>
              <option value="Chair">Chair</option>
              <option value="Co-Chair">Co-Chair</option>
              <option value="Member">Member</option>
              <option value="Probationary Member">Probationary Member</option>
            </select>
          </div>
          <div>
            <label className='block mb-1 text-blue-900'>Year Level:</label>
            <select
              name="yearLevel"
              value={formData.yearLevel}
              onChange={handleChange}
              required
              className='w-full px-4 py-2 border border-blue-300 rounded bg-blue-50 text-blue-900'
            >
              <option value="">Select Year Level</option>
              <option value="1st year">1st year</option>
              <option value="2nd year">2nd year</option>
              <option value="3rd year">3rd year</option>
              <option value="4th year">4th year</option>
            </select>
          </div>
          <button type="submit" className='w-full mt-8 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
