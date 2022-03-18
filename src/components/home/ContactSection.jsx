import * as React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'gatsby';
import Button from '../common/buttons/Button';
import Divider from '../common/Divider';

export default function ContactSection() {
  return (
    <div className='px-12 my-8 fixed-width sm:mb-24'>
      <Divider className='hidden sm:block' />
      <section className='flex flex-col items-center grid-cols-2 gap-12 px-5 my-16 text-center sm:text-left sm:items-start sm:grid'>
        <h1 className='font-bold text-7xl text-oxford-blue sm:text-8xl'>
          Reach us out.
        </h1>
        <p className='text-2xl font-light text-oxford-blue sm:order-3'>
          We're always looking forward to making connections. So feel free to
          drop us a message.
        </p>
        <Link to='/contact-us' className='m-auto grow sm:row-span-2 sm:order-2'>
          <Button
            text='Write us a message'
            textColor='text-white sm:text-2xl sm:p-4 sm:px-10 gap-4'
            icon={<FiArrowRight size='1.3em' />}
            color='bg-darkish-blue'
          />
        </Link>
      </section>
      <Divider className='hidden sm:block' />
    </div>
  );
}
