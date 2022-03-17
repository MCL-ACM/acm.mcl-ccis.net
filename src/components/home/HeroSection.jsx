import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import HeroBanner from '../common/hero/HeroBanner';
import HeroContent from './HeroContent';
import DesktopHeroDecoration from './DesktopHeroDecoration';
import DotsDecoration from './DotsDecoration';

export default function HeroSection({ callback }) {
  return (
    <div className='relative overflow-hidden'>
      <section className='flex items-center justify-center sm:gap-48 flex-col sm:mx-52 sm:grid sm:grid-cols-2 sm:h-[84vh]'>
        <div className='relative'>
          <HeroBanner
            image={
              <StaticImage
                src='../../images/home/Home-Banner.jpg'
                alt='Home Banner'
              />
            }
          />
          <DotsDecoration className='hidden sm:block sm:absolute -top-10 -right-10 max-w-[80%] max-h-[80%] z-[-1]' />
          <DotsDecoration className='hidden sm:block sm:absolute -bottom-10 -left-10 max-w-[80%] max-h-[80%] z-[-1]' />
        </div>
        <HeroContent callback={callback} />
        <DesktopHeroDecoration className='hidden sm:block sm:absolute z-[-1]' />
      </section>
    </div>
  );
}
