import { Link } from 'gatsby';
import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { GiPlainCircle } from 'react-icons/gi';

export default function NavBanner() {
  return (
    <Link to='/hoc2022'>
      <div className='bg-[#1AADBB] py-2 flex flex-row items-center justify-center'>
        <p className='text-white text-center'>
          Hello Programming 2022 is here! Click here to view the activities{' '}
          <FiArrowRight className='inline' />
        </p>
      </div>
    </Link>
  );
}
