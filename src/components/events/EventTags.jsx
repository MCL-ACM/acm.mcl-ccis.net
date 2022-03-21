import React from 'react';

export default function EventTags({ tags, className }) {
  return (
    <ul className={`flex flex-wrap w-full space-x-3 ${className}`}>
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
