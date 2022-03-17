import React from 'react';
import { Link } from 'gatsby';
import Menu from './navbar/Menu';
import Logo from './navbar/Logo';
import MenuNav from './navbar/desktop/MenuNav';

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
    <nav className='fixed z-10 flex items-center justify-between w-full px-10 bg-white py-7'>
      <Link to='/'>
        <Logo />
      </Link>
      <div className='lg:hidden'>
        <Menu links={links} />
      </div>
      <div className='hidden lg:block relative'>
        <MenuNav links={links} />
      </div>
    </nav>
  );
}
