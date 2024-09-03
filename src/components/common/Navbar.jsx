import React from 'react';
import { Link } from 'gatsby';
import { useLocation } from '@reach/router';

import Menu from './navbar/Menu';
import Logo from './navbar/Logo';
import MenuNav from './navbar/desktop/MenuNav';
import NavBanner from './navbar/NavBanner';
import NavContact from './navbar/NavContact';

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
];
export default function Navbar() {
  const location = useLocation();
  const pathname = location.pathname;

  console.log(pathname);

  return (
    <div className='fixed z-10 w-full'>
      <nav className='flex items-center justify-center w-full bg-[#212840]'>
        <main className='px-20 py-3 w-full flex mx-auto items-center justify-between'>
          <Link to='/'>
            <Logo />
          </Link>
          <div className='lg:hidden text-white'>
            <Menu links={links} />
          </div>
          <div className='relative hidden lg:block'>
            <MenuNav links={links} current_path={pathname} />
          </div>
          <div className='relative hidden lg:block'>
            <NavContact />
          </div>
        </main>
        <div className='w-full h-[1px] bg-gradient-to-r from-standard-blue to-cerulean-crayola absolute bottom-0 hidden lg:block opacity-20' />
      </nav>
      {/* <NavBanner /> */}
    </div>
  );
}
