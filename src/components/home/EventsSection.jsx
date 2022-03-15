import * as React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'gatsby';
import EventCollection from './EventCollection';
import Button from '../common/buttons/Button';
import SectionHeader from './SectionHeader';
import EventsDecoration from './EventsDecoration';

export default function EventsSection() {
  return (
    <div className='relative mt-12 mb-8'>
      <EventsDecoration
        className='absolute -bottom-20 max-h-fit'
        style={{ 'z-index': '-10' }}
      />
      <section className='z-10 px-5'>
        <div className='mb-4'>
          <SectionHeader header='Fulfilling our Vision' subheader='Events' />
        </div>
        <div className='flex flex-col items-center gap-8'>
          <EventCollection />
          <Link to='/events'>
            <Button
              text='See all our events'
              textColor='text-oxford-blue'
              color='bg-white'
              glow
              icon={<FiArrowRight size='1.3em' />}
            />
          </Link>
        </div>
      </section>
    </div>
  );
}
