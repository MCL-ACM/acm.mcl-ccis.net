import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import HeroSection from '../common/hero/HeroSection';
import ImageWithCaption from '../common/ImageWithCaption';

export default function MembersHero() {
  return (
    <HeroSection
      image={
        <ImageWithCaption
          image={
            <StaticImage
              src='../../images/Members.jpg'
              alt='Members'
              className='h-[375px] w-auto lg:w-full lg:aspect-[2/1]'
            />
          }
          message='MCL-ACM members of school year 2017 to 2018'
          hiddenMobile
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
