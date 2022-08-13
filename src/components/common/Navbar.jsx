import React from 'react';
import { Link } from 'gatsby';
import Menu from './navbar/Menu';
import Logo from './navbar/Logo';
import MenuNav from './navbar/desktop/MenuNav';
import NavBanner from './navbar/NavBanner';

const links = [
  {
    page: 'Home',
    slug: '/',
    key: 1,
  },
  {
    page: 'About us',
    slug: '/about',
    key: 2,
  },
  {
    page: 'Events',
    slug: '/events',
    key: 3,
  },
  {
    page: 'Members',
    slug: '/members',
    key: 4,
  },
  {
    page: 'Contact Us',
    slug: '/contact-us',
    key: 5,
  },
];

export default function Navbar() {
  return (
    <div className='fixed z-10 w-full'>
      <nav className='flex items-center justify-center w-full bg-white'>
          <main className='px-5 lg:px-2 py-3 w-full flex justify-between items-center lg:max-w-[69.5em]'>
            <Link to='/'>
              <Logo />
            </Link>
            <div className='lg:hidden'>
              <Menu links={links} />
            </div>
            <div className='relative hidden lg:block'>
              <MenuNav links={links} />
            </div>
          </main>
          <div className='w-full h-[1px] bg-gradient-to-r from-standard-blue to-cerulean-crayola absolute bottom-0 hidden lg:block opacity-20' />
      </nav>
    </div>
  );
}
