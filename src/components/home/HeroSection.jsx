import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import HeroBanner from '../common/hero/HeroBanner';
import HeroContent from './HeroContent';

export default function HeroSection({ callback }) {
  return (
    <section>
      <HeroBanner
        image={
          <StaticImage
            src='../../images/home/Home-Banner.jpg'
            alt='Home Banner'
          />
        }
      />
      <HeroContent callback={callback} />
    </section>
  );
}
