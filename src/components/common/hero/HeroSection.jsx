import React from 'react';
import HeroBanner from './HeroBanner';
import HeroText from './HeroText';

export default function HeroSection(
  imagePath,
  imageAlt,
  header,
  subheader,
  variants,
) {
  const variantClasses = {
    left: 'items-left',
    right: 'items-right',
    center: 'items-center',
  };

  return (
    <div>
      <HeroBanner imagePath={imagePath} imageAlt={imageAlt} />
      <HeroText
        header={header}
        subheader={subheader}
        className={variantClasses[variants]}
      />
    </div>
  );
}
