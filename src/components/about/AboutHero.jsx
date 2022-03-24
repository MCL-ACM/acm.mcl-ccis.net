import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import HeroSection from '../common/hero/HeroSection';

export default function AboutHero() {
  return (
    <HeroSection
      image={
        <StaticImage
          src='../../images/about/about_us.png'
          alt=''
          className='w-full'
        />
      }
      headerText='A Student Chapter of ACM'
      subheaderText='About us'
      variant='right'
    >
      MCL-ACM fosters computing excellence within its members and the MCL
      community by hosting programming-related events and peer mentoring for IT
      courses. It also aims to build a versatile community and encourage
      relaxation by providing social events for the students to enjoy.
    </HeroSection>
  );
}
