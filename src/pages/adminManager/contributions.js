import React, { useState, useEffect } from 'react';
import Head from '../../components/common/Head';
import { addContributionData } from '../../components/admin/contributionMethods';

export default function ContributionsPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const tempData = await addContributionData(1000, new Date(2025, 4, 14));
      setData(tempData);
    };

    fetchData();
  }, []);

  console.log(data);

  return (
    <div className='w-full lg:mt-[4.8125em] relative pb-[9.25em]'>
      <Head title='Contribution Manager' />

      <h1>Hello World</h1>
    </div>
  );
}
