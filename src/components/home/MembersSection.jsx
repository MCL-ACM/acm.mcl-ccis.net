import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import { Link } from 'gatsby';
import { FiArrowRight } from 'react-icons/fi';
import Button from '../common/buttons/Button';
import DotsDecoration from './decorations/DotsDecoration';
import DotsRowSmallDecoration from './decorations/DotsRowSmallDecoration';

export default function MembersSection() {
  return (
    <section className='flex flex-col gap-8 fixed-width px-5'>
      <div className='relative sm:my-28'>
        <div className='sm:absolute w-full h-full sm:top-8 sm:left-8 sm:z-[-1] sm:bg-gradient-to-tr from-standard-blue to-cerulean-crayola' />
        <StaticImage src='../../images/home/Home-Members.jpg' alt='' />
        <DotsRowSmallDecoration className='hidden sm:block sm:absolute -top-8 -left-10 max-w-[20%] max-h-[20%]' />
        <DotsDecoration className='text-oxford-blue hidden sm:block sm:absolute bottom-28 -right-16 max-w-[50%] max-h-[50%] z-[-1]' />
        <DotsDecoration className='text-oxford-blue hidden sm:block sm:absolute -bottom-20 left-10 max-w-[50%] max-h-[50%] z-[-1]' />
      </div>
      <div className='flex flex-col items-end gap-4 text-right sm:items-center sm:text-center '>
        <div>
          <h2 className='text-3xl font-bold text-oxford-blue sm:text-4xl sm:mb-1.5 mb-4'>
            Passionate and Dedicated
          </h2>
          <h3 className='text-lg font-medium text-darkish-blue sm:text-2xl'>
            Our Members
          </h3>
        </div>
        <p className='text-lg font-light leading-relaxed sm:font-normal text-rich-black sm:text-lg sm:my-4'>
          MCL-ACM take pride in its organization members. Led by the Executive
          Committee, its members work together and strive to build an excellent
          community and execute meaningful initiatives.
        </p>
        <Link to='/members'>
          <Button
            text='Explore our members'
            color='bg-darkish-blue'
            textColor='text-white sm:text-xl sm:p-4 sm:px-8 gap-4'
            icon={<FiArrowRight size='1.3em' />}
          />
        </Link>
      </div>
    </section>
  );
}
