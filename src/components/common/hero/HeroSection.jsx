import React from 'react';
import HeroBanner from './HeroBanner';
import HeroHeadingText from './HeroHeadingText';
import HeroBodyText from './HeroBodyText';

export default function HeroSection({
  headerText,
  subheaderText,
  children,
  variant,
  image,
}) {
  const variantClasses = {
    left: 'text-left lg:text-center',
    right: 'text-right lg:text-center',
    center: 'text-center lg:text-center',
  };

  return (
    <div className='flex flex-col lg:gap-16 fixed-width lg:mt-16'>
      <HeroBanner image={image} />
      <HeroHeadingText
        header={headerText}
        subheader={subheaderText}
        className={variantClasses[variant]}
      />
      <HeroBodyText className='hidden lg:block'>{children}</HeroBodyText>
    </div>
  );
}
