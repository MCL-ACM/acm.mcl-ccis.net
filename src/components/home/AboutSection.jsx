import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

export default function AboutSection() {
  return (
    <section
      id='about'
      className='flex flex-col gap-4 px-5 sm:grid sm:grid-cols-2'
    >
      <div className='relative m-24'>
        <div className='absolute w-[95%] h-[95%] top-0 left-0 bg-gradient-to-tr from-standard-blue to-cerulean-crayola z-[-1]' />
        <div className='absolute w-[95%] h-[95%] bottom-0 right-0 z-10 bg-white p-24 shadow-lg'>
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

      <div>
        <StaticImage
          src='../../images/home/Home-About.jpg'
          alt=''
          className='mb-8'
        />
      </div>
    </section>
  );
}
