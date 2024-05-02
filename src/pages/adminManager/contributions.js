import React, { useEffect } from 'react';
import { Dropdown } from 'semantic-ui-react';
import Head from '../../components/common/Head';
import { setContributionData } from '../../components/admin/contributionMethods';
import SingleUploadForm from '../../components/admin/Contributions/SingleuploadForm';
import BatchUploadForm from '../../components/admin/Contributions/BatchuploadForm';

export default function ContributionsPage() {
  useEffect(() => {
    setContributionData();
  }, []);

  return (
    <div className='w-full lg:mt-[4.8125em] relative pb-[9.25em] text-center'>
      <Head title='Contribution Manager' />
      <h1
        className='font-bold text-3xl py-2 mx-auto mb-4 max-w-full w-full'
        style={{ color: '#000080' }}
      >
        Contributions
      </h1>
      <div className='flex flex-row justify-center'>
        <SingleUploadForm />
        <div className='w-0.5 bg-gray-400' />
        <BatchUploadForm />
      </div>
    </div>
  );
}
