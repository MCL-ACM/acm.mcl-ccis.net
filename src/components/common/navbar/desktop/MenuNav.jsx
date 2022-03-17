import React from 'react';
import MenuLink from '../MenuLink';

export default function MenuNav({ links }) {
  return (
    <div className='flex items-center'>
      <ul className='flex gap-x-11'>
        {links.map(({ page, slug, key }) => (
          <MenuLink page={page} slug={slug} key={key} />
        ))}
      </ul>
    </div>
  );
}
