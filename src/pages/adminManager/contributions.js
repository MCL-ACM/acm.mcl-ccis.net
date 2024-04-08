import React, { useState, useEffect } from 'react';
import Head from '../../components/common/Head';
import { setContributionData } from '../../components/admin/contributionMethods';

export default function ContributionsPage() {
  const [data, setData] = useState([]);

  setContributionData();

  return (
    <div className='w-full lg:mt-[4.8125em] relative pb-[9.25em]'>
      <Head title='Contribution Manager' />
      <h1>Hello World</h1>
    </div>
  );
}
