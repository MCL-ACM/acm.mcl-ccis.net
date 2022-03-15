import * as React from 'react';
import HeroBanner from './HeroBanner';
import HeroContent from './HeroContent';

export default function HeroSection({ callback }) {
  return (
    <section>
      <HeroBanner />
      <HeroContent callback={callback} />
    </section>
  );
}
