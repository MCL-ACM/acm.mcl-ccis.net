import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'gatsby';
import DotsDecoration from './decorations/DotsDecoration';
import DotsRowSmallDecoration from './decorations/DotsRowSmallDecoration';
import Button from '../common/buttons/Button';

import Divider from '../common/Divider';
import ImageWithCaption from '../common/ImageWithCaption';

export default function AboutSection({ ref }) {
  return (
    <section
      className='flex flex-col-reverse items-center gap-8 px-5 lg:gap-24 lg:grid lg:grid-cols-2 fixed-width'
      ref={ref}
    >
      <div className='relative'>
        <div className='absolute w-full h-full -left-8 -top-8  lg:bg-gradient-to-t from-standard-blue to-cerulean-crayola z-[-1]' />
        <div className='flex flex-col gap-4 lg:bg-white lg:p-12 lg:shadow-lg lg:gap-y-12'>
          <Divider className='hidden lg:block lg:h-2' />
          <div className='flex flex-col gap-4 lg:gap-9'>
            <div>
              <h2 className='mb-4 text-3xl font-bold text-oxford-blue lg:mb-0'>
                Nurturing Excellence
              </h2>
              <h3 className='text-lg font-medium text-darkish-blue'>
                About MCL ACM
              </h3>
            </div>

            <p className='text-lg font-light leading-relaxed lg:font-normal text-rich-black'>
              Malayan Colleges Laguna ACM Student Chapter is a student
              organization chartered by the Association for Computing Machinery
              that aims to promote a greater interest in modern computing and
              its applications.
            </p>
            <Link to='/about'>
              <Button
                text='Read about Us'
                textColor='text-white lg:text-2xl lg:p-4 lg:px-8 gap-4'
                icon={<FiArrowRight size='1.3em' />}
                color='bg-darkish-blue'
              />
            </Link>
          </div>
        </div>
      </div>
      <div className='relative lg:mt-8 lg:mb-7 lg:mr-7'>
        <ImageWithCaption
          image={
            <StaticImage
              src='../../images/home/Home-About.jpg'
              alt=''
              className='aspect-square'
            />
          }
          message='Jereh Tejano teaching in Hour of Code 2019'
        />

        <DotsRowSmallDecoration className='hidden lg:block lg:absolute -top-8 left-20 max-w-[40%] max-h-[40%]' />
        <DotsDecoration className='text-oxford-blue hidden lg:block lg:absolute -bottom-7 -right-7 max-w-[50%] max-h-[50%] z-[-1]' />
      </div>
    </section>
  );
}
