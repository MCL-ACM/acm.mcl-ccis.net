import React from 'react';
import HeroBanner from './HeroBanner';
import HeroText from './HeroText';

export default function HeroSection({ header, subheader, variants, image }) {
  const variantClasses = {
    left: 'items-left',
    right: 'items-right',
    center: 'items-center',
  };

  return (
    <div>
      <HeroBanner image={image} />
      <HeroText
        header={header}
        subheader={subheader}
        className={variantClasses[variants]}
      />
    </div>
  );
}
