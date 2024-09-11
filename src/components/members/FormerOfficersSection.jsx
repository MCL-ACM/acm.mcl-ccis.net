import React, { useState } from 'react';
import MemberInfo from './MemberInfo';
import MemberSection from './MemberSection';
import FormerDropdown from './FormerDropdown';

export default function FormerOfficersSection({
  formerOfficers,
  formerOfficersPhotos,
}) {
  const [selectedYear, setSelectedYear] = useState(
    Object.keys(formerOfficers)[0],
  );

  const schoolYears = Object.keys(formerOfficers).map((year) => ({
    label: year,
    value: year,
  }));

  const selectedFormerOfficers = formerOfficers[selectedYear];

  return (
    <div>
      <hr className='absolute h-10 w-full border-black left-0  right-5' />
      <div className='mt-12 mb-8 lg:mb-12 flex flex-col lg:flex-row items-center lg:justify-between '>
        <h3 className='text-2xl font-bold text-center lg:mb-4 text-oxford-blue lg:text-4xl lg:text-left'>
          Former Officers
        </h3>
        <FormerDropdown
          schoolYears={schoolYears}
          selectedYear={selectedYear}
          setSelectedYear={setSelectedYear}
        />
      </div>
      <MemberSection
        itemsToDisplay={selectedFormerOfficers}
        formerOfficersPhotos={formerOfficersPhotos}
        className={'min-h-[200px]'}
      />
    </div>
  );
}
