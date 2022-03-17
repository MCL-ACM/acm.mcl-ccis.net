import React from 'react'
import AboutSection from '../components/home/AboutSection'
import ContactSection from '../components/home/ContactSection'
import Divider from '../components/home/Divider'
import EventsSection from '../components/home/EventsSection'
import HeroSection from '../components/home/HeroSection'
import MembersSection from '../components/home/MembersSection'

export default function index() {
  return (
    <main className="flex flex-col gap-12">
      <HeroSection />
      <Divider />
      <AboutSection />
      <Divider />
      <MembersSection />
      <EventsSection />
      <ContactSection />
    </main>
  )
}
