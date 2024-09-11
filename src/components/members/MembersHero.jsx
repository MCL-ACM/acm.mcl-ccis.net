import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import HeroSection from '../common/hero/HeroSection';
import ImageWithCaption from '../common/ImageWithCaption';
import TealBg from '../common/decorations/TealBg';
import MembersHeroDecoration from './MembersHeroDecoration';

export default function MembersHero() {
  return (
    <div>
      <div className='relative flex flex-col fixed-width items-center w-full lg:w-auto mt-16'>
        <StaticImage
          src='../../images/Members.jpg'
          alt='Members'
          className='h-[75%] w-[75%] lg:aspect-[2/1] z-[1]'
        />
        <TealBg
          className={
            'hidden lg:block lg:absolute w-[75%] h-full -left-[-7rem] -bottom-7 z-1'
          }
        />
        <MembersHeroDecoration
          className={'hidden lg:block lg:absolute z-[2] w-full h-full'}
        />
      </div>
      <div className='flex flex-col items-center mx-auto mt-[5rem] font-inter max-w-screen-lg'>
        <hr className='w-[90%] border-t-1 border-black mb-4' />
        <p className='font-bold text-[51px]'>
          The&nbsp;
          <span className='text-red-600'>Foundation for Excellence</span>
        </p>
        <div className='w-full flex flex-row items-center'>
          <hr className='w-full border-t-1 border-black ml-52' />
          <p className='text-[32px] mx-4'>Members</p>
          <hr className='w-[30%] border-t-1 border-black' />
        </div>
        <p className='text-center text-[24px] mt-7'>
          MCL-ACM fosters computing excellence within its members and the MCL
          community by hosting programming-related events and peer mentoring for
          IT courses. It also aims to build a versatile community and encourage
          relaxation by providing social events for the students to enjoy.
        </p>
      </div>
    </div>
  );
}
