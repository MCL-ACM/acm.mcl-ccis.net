import React, { useRef } from 'react';
import Divider from '../components/common/Divider';
import Head from '../components/common/Head';
import AboutSection from '../components/home/AboutSection';
import ContactSection from '../components/home/ContactSection';
import EventsSection from '../components/home/EventsSection';
import HeroSection from '../components/home/HeroSection';
import MembersSection from '../components/home/MembersSection';

export default function index() {
  const aboutRef = useRef(null);
  const executeScroll = () =>
    aboutRef.current.scrollIntoView({ behavior: 'smooth' });

  return (
    <div>
      <Head />
      <main className='flex flex-col gap-12 lg:gap-20'>
        <HeroSection callback={() => executeScroll()} />
        <Divider className='lg:my-24 mx-5 lg:mx-0 lg:w-11/12 lg:h-[2px] shadow-border-glow' />
        <div ref={aboutRef}>
          <AboutSection />
        </div>
        <Divider className='lg:my-24 mx-5 lg:mx-0 lg:w-11/12 lg:h-[2px] shadow-border-glow ' />
        <MembersSection />
        <Divider className='lg:my-24 mx-5 lg:mx-0 lg:w-11/12 lg:h-[2px] lg:shadow-none hidden lg:block' />
        <EventsSection />
        <ContactSection />
      </main>
    </div>
  );
}
