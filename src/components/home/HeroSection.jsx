import * as React from 'react';

import HeroContent from './HeroContent';
import HomeBanner from './HomeBanner';
import HeroDecoration from '../common/decorations/HeroDecoration';

export default function HeroSection({ callback }) {
  return (
    <div className='relative overflow-hidden'>
      <section className='flex items-center justify-center lg:gap-18 flex-col lg:grid lg:grid-cols-2 lg:h-[84vh] fixed-width'>
        <HomeBanner />
        <HeroContent callback={callback} />
      </section>
      <HeroDecoration className='hidden lg:block lg:absolute z-[-1] h-[98%] bottom-0 right-0' />
    </div>
  );
}
