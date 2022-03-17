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
    <main className='flex flex-col gap-12'>
      <HeroSection callback={() => executeScroll()} />
      <Divider glow className='mx-5 sm:mr-5 sm:ml-0' />
      <div ref={aboutRef}>
        <AboutSection />
      </div>
      <Divider glow className='mx-5 sm:mr-5 sm:ml-0' />
      <MembersSection />
      <EventsSection />
      <ContactSection />
    </main>
  );
}
