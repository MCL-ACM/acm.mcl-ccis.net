import * as React from 'react';
import { FiArrowDown } from 'react-icons/fi';
import Button from '../common/buttons/Button';
import HeroContentDecoration from './decorations/HeroContentDecoration';

export default function HeroContent({ callback }) {
  return (
    <div className='relative'>
      <HeroContentDecoration
        className='absolute w-full -top-20 sm:hidden'
        style={{ 'max-height': '500px', 'z-index': '-1' }}
      />

      <div className='flex flex-col items-center my-8 mb-4 text-center sm:text-right sm:items-end'>
        <p className='mb-4 text-sm font-light text-oxford-blue sm:text-lg'>
          Malayan Colleges Laguna ACM Student Chapter
        </p>
        <p className='mb-4 text-4xl font-bold text-oxford-blue sm:text-6xl'>
          A Community for Computing Enthusiasts
        </p>
        <p className='hidden mb-8 font-light sm:block text-oxford-blue sm:text-lg'>
          Promoting excellence in modern computing
        </p>
        <Button
          callback={callback}
          color='bg-white'
          textColor='text-oxford-blue'
          text='Check us out'
          icon={<FiArrowDown size='1.3em' />}
        />
      </div>
    </div>
  );
}
