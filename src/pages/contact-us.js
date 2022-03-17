import React from 'react';
import HeadingText from '../components/contact/HeadingText';
import Form from '../components/contact/Form';
import HeroDecoration from '../components/common/decorations/HeroDecoration';

export default function contactUs() {
  return (
    <div>
      <div className='flex flex-col lg:flex-row fixed-width lg:my-20 lg:justify-between lg:gap-10'>
        <HeadingText />
        <Form />
      </div>
      <HeroDecoration className='absolute top-80 hidden md:block -z-10' />
    </div>
  );
}
