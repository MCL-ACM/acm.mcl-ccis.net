import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

export default function Navigation() {
  return (
    <div className='flex flex-row bg-white mb-8 h-20 z-10 sticky top-0 sticky items-center px-4 shadow-md py-3'>
      <a
        href='https://hourofcode.com/us'
        className='h-full'
        target='_blank'
        rel='noreferrer'
      >
        <img
          alt='Hour Of Code Logo'
          src='/hoc-logo.png'
          className='h-full w-auto'
        />
      </a>
      <div className='pl-4 text-lg'>MCL-ACM Hour of Code 2022</div>

      <Link className='ml-auto h-full ' to='/' target='_blank'>
        <img
          alt='Back to MCL-ACM website home'
          src='/mcl-acm.png'
          className='h-full w-auto'
        />
      </Link>
    </div>
  );
}
