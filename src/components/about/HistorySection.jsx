import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import ImageWithInformation from '../common/ImageWithInformation';

export default function HistorySection() {
  return (
    <div className='flex flex-col gap-5 text-center lg:gap-10'>
      <h2 className='px-5 text-3xl font-bold leading-snug lg:text-5xl text-oxford-blue fixed-width'>
        How We Started
      </h2>
      <div>
        <ImageWithInformation
          image={
            <StaticImage
              src='../../images/about/how_we_started.png'
              alt="MCL-ACM's first General Assembly"
              className='mx-5 lg:mx-0 max-h-[450px] w-full'
              objectFit='cover'
            />
          }
          message='The first ever general assembly of MCL-ACM'
          hiddenMobile
        />
      </div>

      <div className='px-5 text-lg lg:text-xl text-rich-black font-light lg:font-normal leading-[180%] lg:leading-[43px] lg:tracking-wide fixed-width'>
        <p>
          The Malayan Colleges Laguna ACM Student Chapter is the{' '}
          <b>
            first Association for Computing Machinery (ACM) student chapter in
            the CALABARZON region
          </b>
          . It was founded on August 13, 2018, with MCL CCIS Dean Khristian
          Kikuchi as its adviser and Mr. John Disonglo as its first president.
        </p>
        <p className='mt-5 lg:hidden'>
          MCL-ACM fosters computing excellence within its members and the MCL
          community by hosting programming-related events and peer mentoring for
          IT courses. It also aims to build a versatile community and encourage
          relaxation by providing social events for the students to enjoy.
        </p>
      </div>
    </div>
  );
}
