import React from 'react';
import Footer from './common/Footer';
import Navbar from './common/Navbar';

export default function Layout({ children }) {
  return (
    <main className='relative min-h-screen layout-img-bg'>
      <Navbar />
      <section className='pt-32 sm:pt-24 pb-[34.5em]'>{children}</section>
      <Footer />
    </main>
  );
}
