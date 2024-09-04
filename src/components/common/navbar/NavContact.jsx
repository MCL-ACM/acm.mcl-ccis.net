import { Link } from 'gatsby';
import React from 'react';

export default function NavContact() {
  return (
    <div className='flex items-center'>
      <ul className='flex gap-x-11'>
        <li className='text-white font-inter text-lg'>
          <button type='button'>
            <Link
              to='/contact-us'
              className='bg-red-600 py-3 rounded-full px-10'
            >
              Contact Us
            </Link>
          </button>
        </li>
      </ul>
    </div>
  );
}
