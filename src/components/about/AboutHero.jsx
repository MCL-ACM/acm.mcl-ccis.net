import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import HeroSection from '../common/hero/HeroSection';
import ImageWithCaption from '../common/ImageWithCaption';

export default function AboutHero() {
  return (
    <HeroSection
      image={
        <ImageWithCaption
          image={
            <StaticImage
              src='../../images/HourOfCodeTeach.jpg'
              alt='About Hero'
              className='h-[375px] w-auto lg:w-full lg:aspect-[2/1]'
            />
          }
          message='Jereh Tejano teaching in Hour of Code 2018'
          hiddenMobile
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
