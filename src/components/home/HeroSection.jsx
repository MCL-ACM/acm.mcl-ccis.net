import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import HeroBanner from '../common/hero/HeroBanner';
import HeroContent from './HeroContent';
import DotsDecoration from './decorations/DotsDecoration';
import HeroDecoration from '../common/decorations/HeroDecoration';

export default function HeroSection({ callback }) {
  return (
    <div className='relative overflow-hidden'>
      <section className='flex items-center justify-center lg:gap-18 flex-col lg:grid lg:grid-cols-2 lg:h-[84vh] fixed-width'>
        <HeroBanner
          image={
            <StaticImage
              src='../../images/home/Home-Banner.jpg'
              alt='Home Banner'
            />
          }
          homePage
        />
        <HeroContent callback={callback} />
      </section>
      <HeroDecoration className='hidden lg:block lg:absolute z-[-1] h-[98%] bottom-0 right-0' />
    </div>
  );
}
