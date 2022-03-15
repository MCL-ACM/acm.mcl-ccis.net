import React, { useRef } from 'react';
import AboutSection from '../components/home/AboutSection';
import ContactSection from '../components/home/ContactSection';
import Divider from '../components/home/Divider';
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
      <Divider />
      <div ref={aboutRef}>
        <AboutSection />
      </div>
      <Divider />
      <MembersSection />
      <EventsSection />
      <ContactSection />
    </main>
  );
}
