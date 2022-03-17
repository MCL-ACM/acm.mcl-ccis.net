import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import { Link } from 'gatsby';
import { FiArrowRight } from 'react-icons/fi';
import Button from '../common/buttons/Button';

export default function MembersSection() {
  return (
    <section className='px-5 fixed-width'>
      <section className='flex flex-col gap-4'>
        <div>
          <StaticImage
            src='../../images/home/Home-Members.jpg'
            alt=''
            className='mb-8'
          />
        </div>
        <hgroup className='flex flex-col gap-3 '>
          <h2 className='text-3xl font-bold text-oxford-blue'>
            Passionate and Dedicated
          </h2>
          <h3 className='text-xl font-medium text-darkish-blue'>Our Members</h3>
        </hgroup>
        <p className='text-xl font-light leading-relaxed text-rich-black'>
          MCL-ACM take pride in its organization members. Led by the Executive
          Committee, its members work together and strive to build an excellent
          community and execute meaningful initiatives.
        </p>
        <Link to='/members'>
          <Button
            text='Explore our members'
            color='bg-darkish-blue'
            textColor='text-white'
            icon={<FiArrowRight size='1.3em' />}
          />
        </Link>
      </section>
    </section>
  );
}
