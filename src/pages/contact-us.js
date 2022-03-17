import React from 'react';
import HeadingText from '../components/contact/HeadingText';
import Form from '../components/contact/Form';

export default function contactUs() {
  return (
    <div className='flex flex-col'>
      <HeadingText />
      <Form />
    </div>
  );
}
