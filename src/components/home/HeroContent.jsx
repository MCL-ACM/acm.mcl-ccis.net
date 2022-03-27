import * as React from 'react';
import { FiArrowDown } from 'react-icons/fi';
import Button from '../common/buttons/Button';
import HeroContentDecoration from './decorations/HeroContentDecoration';

export default function HeroContent({ callback }) {
  return (
    <div className='block'>
      <div className='flex flex-col items-center my-8 mb-4 text-center lg:text-right lg:items-end'>
        <p className='mb-4 text-sm font-light text-oxford-blue lg:text-lg'>
          Malayan Colleges Laguna ACM Student Chapter
        </p>
        <p className='mb-4 text-4xl font-bold text-oxford-blue lg:text-6xl'>
          A Community for Computing Enthusiasts
        </p>
        <p className='hidden mb-8 font-light lg:block text-oxford-blue lg:text-lg'>
          Promoting excellence in modern computing
        </p>
        <Button
          callback={callback}
          color='bg-white'
          textColor='text-oxford-blue lg:border lg:border-standard-blue/40 lg:shadow-button-glow-white lg:px-8 lg:py-4 lg:gap-3 lg:text-xl'
          text='Check us out'
          icon={<FiArrowDown size='1.2em' />}
          iconRight
        />
      </div>
      <HeroContentDecoration className='absolute -bottom-20 h-[55%] left-[-70%] lg:left-auto lg:h-full lg:w-[80%] lg:right-[-10%] lg:-bottom-48 z-[-1]' />
    </div>
  );
}
