import React from 'react';

export default function EventTags({ tags }) {
  return (
    <ul className='absolute flex flex-wrap w-full space-x-3 pt-7 px-9'>
      {tags.map((tag) => (
        <li
          key={tag}
          className='bg-standard-blue text-white font-bold text-xs py-[4px] px-[10px] rounded-lg'
        >
          {tag.toUpperCase()}
        </li>
      ))}
    </ul>
  );
}
