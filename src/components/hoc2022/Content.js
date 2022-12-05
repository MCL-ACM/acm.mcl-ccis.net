import React from 'react';
import ReactMarkdown from 'react-markdown';

export default function Content({ title, statement }) {
  return (
    <div className='w-full'>
      <div className='font-semibold text-3xl'>{title}</div>
      <div className='pt-6 prose w-full m-0 max-w-none'>{statement}</div>
    </div>
  );
}
