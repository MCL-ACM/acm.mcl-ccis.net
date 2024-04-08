import React, { useEffect, useState } from 'react';
import Head from '../../components/common/Head';
import { getMembersData } from '../../components/admin/memberMethods';

export default function ManageMembersPage() {
  const [membersData, setMembersData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMembersData();
      setMembersData(data);
    };

    fetchData();
  }, []);

  console.log(membersData); // Log the fetched data

  return (
    <div className='w-full lg:mt-[4.8125em] relative pb-[9.25em]'>
      <Head title='Member Manager' />
      <h1>Hello World</h1>
    </div>
  );
}
