import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'gatsby';
import DotsDecoration from './decorations/DotsDecoration';
import DotsRowSmallDecoration from './decorations/DotsRowSmallDecoration';
import Button from '../common/buttons/Button';

import Divider from '../common/Divider';

export default function AboutSection({ ref }) {
  return (
    <section
      className='flex flex-col-reverse items-center gap-8 px-5 m-10 sm:gap-24 sm:grid sm:grid-cols-2 fixed-width'
      ref={ref}
    >
      <div className='relative'>
        <div className='absolute w-full h-full -left-8 -top-8  sm:bg-gradient-to-t from-standard-blue to-cerulean-crayola z-[-1]' />
        <div className='flex flex-col sm:bg-white sm:p-12 sm:shadow-lg gap-4 sm:gap-y-12'>
          <Divider className='hidden sm:block sm:h-2' />
          <div className='flex flex-col gap-4 sm:gap-9'>
            <div>
              <h2 className='text-3xl font-bold text-oxford-blue sm:mb-0 mb-4'>
                Nurturing Excellence
              </h2>
              <h3 className='text-lg font-medium text-darkish-blue'>
                About MCL ACM
              </h3>
            </div>

            <p className='text-lg font-light leading-relaxed sm:font-normal text-rich-black'>
              Malayan Colleges Laguna ACM Student Chapter is a student
              organization chartered by the Association for Computing Machinery
              that aims to promote a greater interest in modern computing and
              its applications.
            </p>
            <Link to='/about'>
              <Button
                text='Read about Us'
                textColor='text-white sm:text-2xl sm:p-4 sm:px-8 gap-4'
                icon={<FiArrowRight size='1.3em' />}
                color='bg-darkish-blue'
              />
            </Link>
          </div>
        </div>
      </div>
      <div className='relative'>
        <StaticImage
          src='../../images/home/Home-About.jpg'
          alt=''
          className='aspect-square'
        />
        <DotsRowSmallDecoration className='hidden sm:block sm:absolute -top-8 left-20 max-w-[40%] max-h-[40%]' />
        <DotsDecoration className='text-oxford-blue hidden sm:block sm:absolute -bottom-7 -right-7 max-w-[50%] max-h-[50%] z-[-1]' />
      </div>
    </section>
  );
}
