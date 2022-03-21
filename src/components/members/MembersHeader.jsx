import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import HeroSection from '../common/hero/HeroSection';

export default function MembersHeader() {
  return (
    <div>
      <HeroSection
        headerText='The Foundation for Excellence'
        subheaderText='Members'
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
