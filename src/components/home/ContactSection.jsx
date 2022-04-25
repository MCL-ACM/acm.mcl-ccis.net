import * as React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'gatsby';
import Button from '../common/buttons/Button';
import Divider from '../common/Divider';

export default function ContactSection() {
  return (
    <div className='px-12 my-8 fixed-width lg:mb-24'>
      <Divider className='hidden lg:block' />
      <section className='flex flex-col items-center grid-cols-2 gap-12 px-5 my-16 text-center lg:text-left lg:items-start lg:grid'>
        <h1 className='font-bold text-7xl text-oxford-blue lg:text-8xl'>
          Reach out to us.
        </h1>
        <p className='text-2xl font-light text-oxford-blue lg:order-3'>
          We're always looking forward to making connections. So feel free to
          drop us a message.
        </p>
        <Link to='/contact-us' className='m-auto grow lg:row-span-2 lg:order-2'>
          <Button
            text='Write us a message'
            textColor='text-white lg:text-2xl lg:p-4 lg:px-10 gap-4'
            icon={<FiArrowRight size='1.3em' />}
            color='bg-darkish-blue'
          />
        </Link>
      </section>
      <Divider className='hidden lg:block' />
    </div>
  );
}
