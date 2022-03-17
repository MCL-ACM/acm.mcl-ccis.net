import React from 'react';
import Footer from './common/Footer';
import Navbar from './common/Navbar';

export default function Layout({ children }) {
  return (
    <main className='relative min-h-screen'>
      <Navbar />
      <section className='pt-24 sm:pt-[8.3125em] pb-[38.5em]'>
        {children}
      </section>
      <Footer />
    </main>
  );
}
