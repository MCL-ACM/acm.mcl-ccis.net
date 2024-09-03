import React from 'react';
import { Link } from 'gatsby';
import MenuLink from '../MenuLink';

export default function MenuNav({ links, current_path }) {
  return (
    <div className='flex items-center'>
      <ul className='flex gap-x-11'>
        {links.map(({ page, slug, key }) => (
          <li key={key} className='text-white font-inter text-lg'>
            <button type='button'>
              <Link
                to={slug}
                className={current_path === slug ? 'underline' : ''}
              >
                {page}
              </Link>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
