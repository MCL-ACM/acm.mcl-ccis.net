import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import HeroSection from '../common/hero/HeroSection';

export default function MembersHero() {
  return (
    <HeroSection
      image={
        <StaticImage
          src='../../images/Members.jpg'
          alt=''
          className='w-full aspect-[2/1]'
        />
      }
      headerText='The Foundation for Excellence'
      subheaderText='Members'
      variant='right'
    >
      MCL-ACM fosters computing excellence within its members and the MCL
      community by hosting programming-related events and peer mentoring for IT
      courses. It also aims to build a versatile community and encourage
      relaxation by providing social events for the students to enjoy.
    </HeroSection>
  );
}
