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
        <div className='relative lg:m-10'>
          <HeroBanner
            image={
              <StaticImage
                src='../../images/home/Home-Banner.jpg'
                alt='Home Banner'
              />
            }
          />
          <DotsDecoration className='hidden text-cerulean-crayola lg:block lg:absolute -top-10 -right-10 max-w-[80%] max-h-[80%] z-[-1]' />
          <DotsDecoration className='hidden text-cerulean-crayola lg:block lg:absolute -bottom-10 -left-10 max-w-[80%] max-h-[80%] z-[-1]' />
        </div>
        <HeroContent callback={callback} />
      </section>
      <HeroDecoration className='hidden lg:block lg:absolute z-[-1] h-[98%] bottom-0 right-0' />
    </div>
  );
}
