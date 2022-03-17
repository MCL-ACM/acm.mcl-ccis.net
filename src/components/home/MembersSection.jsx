import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import { Link } from 'gatsby';
import { FiArrowRight } from 'react-icons/fi';
import Button from '../common/buttons/Button';
import DotsDecoration from './decorations/DotsDecoration';
import DotsRowSmallDecoration from './decorations/DotsRowSmallDecoration';

export default function MembersSection() {
  return (
    <section className='px-5 fixed-width'>
      <section className='flex flex-col gap-4'>
        <div className='relative sm:my-20'>
          <div className='sm:absolute sm:w-[98%] sm:h-[98%] sm:bottom-0 sm:right-0 sm:z-[-1] sm:bg-gradient-to-tr from-standard-blue to-cerulean-crayola' />
          <StaticImage
            src='../../images/home/Home-Members.jpg'
            alt=''
            className='mb-8 sm:w-[98%] sm:h-[98%]'
          />
          <DotsRowSmallDecoration className='hidden sm:block sm:absolute -top-8 left-20 max-w-[30%] max-h-[30%]' />
          <DotsDecoration className='text-oxford-blue hidden sm:block sm:absolute bottom-28 -right-10 max-w-[50%] max-h-[50%] z-[-1]' />
          <DotsDecoration className='text-oxford-blue hidden sm:block sm:absolute -bottom-5 left-10 max-w-[50%] max-h-[50%] z-[-1]' />
        </div>
        <div className='flex flex-col items-end gap-3 text-right sm:items-center sm:text-center'>
          <h2 className='text-3xl font-bold text-oxford-blue sm:text-4xl'>
            Passionate and Dedicated
          </h2>
          <h3 className='text-xl font-medium text-darkish-blue sm:text-2xl'>
            Our Members
          </h3>
          <p className='text-xl font-light leading-relaxed sm:font-normal text-rich-black sm:text-lg sm:my-4'>
            MCL-ACM take pride in its organization members. Led by the Executive
            Committee, its members work together and strive to build an
            excellent community and execute meaningful initiatives.
          </p>
          <Link to='/members'>
            <Button
              text='Explore our members'
              color='bg-darkish-blue'
              textColor='text-white '
              icon={<FiArrowRight size='1.3em' />}
            />
          </Link>
        </div>
      </section>
    </section>
  );
}
