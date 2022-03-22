import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import Button from '../common/buttons/Button.jsx';

export default function FeaturedEventDetails({ event, toggle }) {
  return (
    <div className='absolute shadow-xl border-2 border-opacity-20 pt-6 bg-white min-w-[358px] max-w-[358px] min-h-[461px] flex flex-col pr-[3.25em] pl-6 gap-y-[1.125em]'>
      <div className='flex flex-col gap-y-2'>
        <h5 className='font-light text-maximum-blue-green'>March 10, 2022</h5>
        <h1 className='font-bold text-oxford-blue tracking-wide text-2xl'>
          Introduction to Virtual Reality and Augmented Reality
        </h1>
      </div>
      <p className='font-light text-oxford-blue'>
        MCL-ACM conducted its first seminar in the ‘CCIS Technology Seminar
        Series’ about VR and AR technology during MCL’s 13th Foundation Day. Its
        goal was to introduce students to technological advancements,
        specifically in the fields of Virtual Reality and Augmented Reality.{' '}
      </p>
      <div>
        <Button
          callback={toggle}
          color='bg-darkish-blue'
          textColor='text-white'
          text='Read More'
          icon={<FiArrowRight size='1.3em' />}
        />
      </div>
    </div>
  );
}
