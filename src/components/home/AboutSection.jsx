import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import DotsDecoration from './decorations/DotsDecoration';
import DotsRowSmallDecoration from './decorations/DotsRowSmallDecoration';

export default function AboutSection() {
  return (
    <section
      id='about'
      className='flex flex-col-reverse gap-4 px-5 sm:my-24 sm:gap-24 sm:grid sm:grid-cols-2'
    >
      <div className='relative '>
        <div className='hidden sm:block sm:absolute sm:w-[95%] sm:h-[95%] sm:top-0 sm:left-0 sm:bg-gradient-to-tr from-standard-blue to-cerulean-crayola z-[-1]' />
        <div className='sm:absolute sm:w-[95%] sm:h-[95%] sm:bottom-0 sm:right-0 sm:z-[1] sm:bg-white sm:p-24 sm:shadow-lg'>
          <hgroup className='flex flex-col gap-3 '>
            <h2 className='text-3xl font-bold text-oxford-blue'>
              Nurturing Excellence
            </h2>
            <h3 className='text-xl font-medium text-darkish-blue'>About Us</h3>
          </hgroup>
          <p className='text-xl font-light leading-relaxed text-rich-black'>
            'Malayan Colleges Laguna ACM Student Chapter is a student
            organization chartered by the Association for Computing Machinery
            that aims to promote a greater interest in modern computing and its
            applications.'
          </p>
        </div>
      </div>

      <div className='relative'>
        <StaticImage
          src='../../images/home/Home-About.jpg'
          alt=''
          className='mb-8'
        />
        <DotsRowSmallDecoration className='hidden sm:block sm:absolute -top-8 left-20 max-w-[40%] max-h-[40%]' />
        <DotsDecoration className='text-oxford-blue hidden sm:block sm:absolute -bottom-5 -right-5 max-w-[50%] max-h-[50%] z-[-1]' />
      </div>
    </section>
  );
}
