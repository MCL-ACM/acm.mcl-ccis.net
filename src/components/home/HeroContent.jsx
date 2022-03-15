import * as React from 'react';
import { FiArrowDown } from 'react-icons/fi';
import Button from '../common/buttons/Button';
import HeroContentDecoration from './HeroContentDecoration';

export default function HeroContent() {
  return (
    <div className='relative'>
      <HeroContentDecoration
        className='absolute w-full -top-20'
        style={{ 'max-height': '500px', 'z-index': '-1' }}
      />

      <div className='flex flex-col items-center px-5 my-8 mb-4 text-center'>
        <p className='mb-4 text-sm font-light text-oxford-blue'>
          Malayan Colleges Laguna ACM Student Chapter
        </p>
        <p className='mb-8 text-4xl font-bold text-oxford-blue'>
          A Community for Computing Enthusiasts
        </p>
        <a href='#about'>
          <Button
            color='bg-white'
            textColor='text-oxford-blue'
            text='Check us out'
            icon={<FiArrowDown size='1.3em' />}
          />
        </a>
      </div>
    </div>
  );
}
