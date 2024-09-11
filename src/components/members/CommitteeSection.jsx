import React, { useEffect, useState } from 'react';
import CommitteeDropdown from './CommitteeDropdown';
import MemberInfo from './MemberInfo';
import MembersPagination from './MembersPagination';
import ExecutiveSection from './ExecutiveSection';
import MemberSection from './MemberSection';

export default function CommitteeSection({ allCommittees }) {
  const [selectedCommittee, setSelectedCommittee] = useState(
    'Executive Committee',
  );

  const [currentPage, setCurrentPage] = useState(1);
  const [direction, setDirection] = useState('right');

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCommittee]);

  const committeeMembers = allCommittees?.[selectedCommittee]?.members;

  const totalPages = committeeMembers
    ? Math.floor(committeeMembers.length / 8) + 1
    : 0;

  const startIndex = (currentPage - 1) * 8;
  const endIndex = startIndex + 8;
  const itemsToDisplay = committeeMembers?.slice(startIndex, endIndex);

  return (
    <div>
      <hr className='h-1 shadow-lg lg:hidden shadow-blue-500/90 bg-gradient-to-tr from-standard-blue to-cerulean-crayola' />
      <div className='mt-4 mb-8 lg:mb-12 flex flex-col lg:flex-row items-center lg:justify-between '>
        <h3 className='text-2xl font-bold text-center lg:mb-4 text-oxford-blue lg:text-4xl lg:text-left'>
          Committees & Members
        </h3>
        <CommitteeDropdown
          selectedCommittee={selectedCommittee}
          setSelectedCommittee={setSelectedCommittee}
        />
      </div>
      {selectedCommittee !== 'Executive Committee' ? (
        <div>
          <MemberSection
            itemsToDisplay={itemsToDisplay}
            direction={direction}
            className={'min-h-[450px]'}
          />
          <MembersPagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
            onpageChangeDirection={setDirection}
          />
        </div>
      ) : (
        <ExecutiveSection officers={committeeMembers} />
      )}
    </div>
  );
}
