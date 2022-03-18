import React from 'react';
import HeroSection from '../components/about/HeroSection';
import HistorySection from '../components/about/HistorySection';
import InternationalOrgSection from '../components/about/InternationalOrgSection';

export default function about() {
  return (
    <div>
      <HeroSection />
      <HistorySection />
      <InternationalOrgSection />
    </div>
  );
}
