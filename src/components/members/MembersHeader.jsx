import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import HeroSection from '../common/hero/HeroSection';

export default function MembersHeader() {
  return (
    <div>
      <HeroSection
        header='The Foundation for Excellence'
        subheader='Members'
        image={
          <StaticImage
            src='../../images/home/Home-Banner.jpg'
            alt='Members Banner'
          />
        }
      />
    </div>
  );
}
