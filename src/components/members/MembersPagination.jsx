import React from 'react';

import { LeftArrow, RightArrow } from './PaginationArrows';

export default function MembersPagination({
  totalPages,
  currentPage,
  onPageChange,
  onpageChangeDirection,
}) {
  const handleClick = (page) => {
    if (page !== currentPage) {
      onPageChange(page);
    }
  };

  const paginationClicked = (value) => {
    onPageChange((currentValue) => {
      const newValue = currentValue + value;
      if (newValue < 1) {
        return 1;
      }
      if (newValue > totalPages) {
        return totalPages;
      }
      return newValue;
    });
    onpageChangeDirection(value > 0 ? 'right' : 'left');
  };

  return (
    <div
      className={`flex flex-row space-x-10 justify-center items-center mt-6 ${
        totalPages === 1 ? 'hidden' : ''
      }`}
    >
      <LeftArrow
        className={'cursor-pointer'}
        clickEvent={() => paginationClicked(-1)}
      />
      {Array.from({ length: totalPages }, (_, index) => (
        <div
          key={index}
          onClick={() => handleClick(index + 1)}
          className={`w-4 h-4 flex items-center justify-center cursor-pointer border border-[#212840] rounded-full ${
            index + 1 === currentPage ? 'bg-[#212840]' : ''
          }`}
        ></div>
      ))}
      <RightArrow
        className={'cursor-pointer'}
        clickEvent={() => paginationClicked(1)}
      />
    </div>
  );
}
