import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

export default function HistorySection() {
  return (
    <div className='mt-20 px-5 text-center'>
      <hr className='border-0 h-1 bg-gradient-to-tr from-cerulean-crayola to-standard-blue' />
      <h1 className='text-4xl font-bold leading-snug text-oxford-blue mt-5'>
        How We Started
      </h1>
      <StaticImage
        src='../../images/about/how_we_started.png'
        alt="MCL-ACM's first General Assembly"
        className='mt-5 w-full'
      />
      <div className='text-lg text-rich-black font-light leading-[180%]'>
        <p className='mt-5  '>
          The Malayan Colleges Laguna ACM Student Chapter is the first
          Association for Computing Machinery (ACM) student chapter in the
          CALABARZON region. It was founded on August 13, 2018, with MCL CCIS
          Dean Khristian Kikuchi as its adviser and Mr. John Disonglo as its
          first president.
        </p>
        <p className='mt-5'>
          MCL-ACM fosters computing excellence within its members and the MCL
          community by hosting programming-related events and peer mentoring for
          IT courses. It also aims to build a versatile community and encourage
          relaxation by providing social events for the students to enjoy.
        </p>
      </div>
    </div>
  );
}
