import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

export default function InternationalOrgSection() {
  return (
    <div className='flex flex-col px-5 text-center lg:text-left fixed-width'>
      <h2 className='text-3xl lg:text-6xl font-bold leading-snug text-oxford-blue lg:max-w-screen-md lg:leading-snug lg:pl-16 lg:border-l-8 lg:border-standard-blue'>
        The International Organization
      </h2>

      <div className='flex flex-col lg:flex-row lg:gap-20'>
        <div className='lg:basis-1/2 lg:order-last'>
          <StaticImage
            src='../../images/about/acm_international_logo.png'
            alt='ACM logo'
            className='mt-5 lg:-mt-36'
          />
        </div>

        <div className='text-lg lg:text-2xl text-rich-black font-light lg:font-normal leading-[180%] lg:leading-[43px] lg:tracking-wide fixed-width lg:basis-1/2'>
          <p className='mt-5 lg:mt-14'>
            The Association for Computing Machinery is an international learned
            society for computing founded in 1947. It is a non-profit
            professional membership group with nearly 100,000 student and
            professional members. ACM brings together computing educators,
            researchers, and professionals to inspire dialogue, share resources,
            and address the field's challenges.
          </p>
        </div>
      </div>
    </div>
  );
}
