import React from 'react';
import HeroSection from '../components/about/HeroSection';
import HistorySection from '../components/about/HistorySection';
import InternationalOrgSection from '../components/about/InternationalOrgSection';
import Divider from '../components/common/Divider';

export default function about() {
  return (
    <div className='flex flex-col mb-20 gap-12 lg:gap-20'>
      <HeroSection />
      <Divider className='mx-5 lg:mx-0 lg:w-11/12 lg:h-[2px]' />
      <HistorySection />
      <Divider className='mx-5 lg:mx-0 lg:w-11/12 lg:h-[2px]' />
      <InternationalOrgSection />
    </div>
  );
}
