import React, { useRef } from 'react';
import Divider from '../components/common/Divider';
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
      <Divider className='hidden sm:block' />
      <main className='flex flex-col gap-12 sm:gap-20'>
        <HeroSection callback={() => executeScroll()} />
        <Divider className='mx-5 sm:mr-5 sm:ml-0 shadow-border-glow' />
        <div ref={aboutRef}>
          <AboutSection />
        </div>
        <Divider className='mx-5 sm:mr-5 sm:ml-0 shadow-border-glow' />
        <MembersSection />
        <Divider className='hidden sm:block sm:mr-5 sm:ml-0 sm:shadow-none' />
        <EventsSection />
        <ContactSection />
      </main>
    </div>
  );
}
