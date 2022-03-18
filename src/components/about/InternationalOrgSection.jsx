import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

export default function InternationalOrgSection() {
  return (
    <div className='mt-20 mb-20 px-5 text-center'>
      <hr className='border-0 h-1 bg-gradient-to-tr from-cerulean-crayola to-standard-blue' />
      <h1 className='text-4xl font-bold leading-snug text-oxford-blue mt-5'>
        The International Organization
      </h1>
      <StaticImage
        src='../../images/about/acm_international_logo.png'
        alt='ACM logo'
        className='mt-5'
      />
      <div className='text-lg text-rich-black font-light leading-[180%]'>
        <p className='mt-5'>
          The Association for Computing Machinery is an international learned
          society for computing founded in 1947. It is a non-profit professional
          membership group with nearly 100,000 student and professional members.
          ACM brings together computing educators, researchers, and
          professionals to inspire dialogue, share resources, and address the
          field's challenges. As the world’s largest computing society, ACM
          strengthens the profession's collective voice through strong
          leadership, promotion of the highest standards, and recognition of
          technical excellence. ACM supports the professional growth of its
          members by providing opportunities for life‐long learning, career
          development, and professional networking.
        </p>
      </div>
    </div>
  );
}
