import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import SectionItem from './SectionItem';

export default function AboutSection() {
  return (
    <section id='about' className='px-5'>
      <StaticImage
        src='../../images/home/Home-About.jpg'
        alt=''
        className='mb-8'
      />
      <SectionItem
        header='Nurturing Excellence'
        subheader='About Us'
        body='Malayan Colleges Laguna ACM Student Chapter is a student organization
        chartered by the Association for Computing Machinery that aims to
        promote a greater interest in modern computing and its applications.'
        buttonText='Read about us'
        buttonLink='/about'
        align='left'
      />
    </section>
  );
}
