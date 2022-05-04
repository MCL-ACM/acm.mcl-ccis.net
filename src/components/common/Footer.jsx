import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Link } from 'gatsby';

export default function Footer() {
  const year = new Date().getFullYear();

  const socialLinks = [
    {
      slug: 'MCL_ACM',
      link: 'https://twitter.com/MCL_ACM',
      icon: <FaTwitter size={35} />,
    },
    {
      slug: 'acmMCL',
      link: 'https://fb.me/acmMCL',
      icon: <FaFacebook size={35} />,
    },
    {
      slug: 'mcl_acm',
      link: 'https://www.instagram.com/mcl_acm',
      icon: <FaInstagram size={35} />,
    },
    {
      slug: 'MCL ACM',
      link: 'https://www.youtube.com/channel/UCuEfYX_hMeS3sSj5M0wHaYQ',
      icon: <FaYoutube size={35} />,
    },
  ];
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
  return (
    <footer className='absolute bottom-0 w-full h-[34.8125em] z-0'>
      <svg
        className='absolute sm:hidden'
        viewBox='0 0 375 48'
        preserveAspectRatio='none'
      >
        <path
          d='M0 0H375V47.7998C375 47.7998 317 0.510638 296 0.510638C275 0.510638 0 48 0 48V0Z'
          fill='#FFFFFF'
        />
      </svg>
      <main className='flex justify-center w-full h-full px-5 pt-24 pb-10 bg-gradient-to-tr from-standard-blue to-cerulean-crayola'>
        <section className='flex flex-col justify-between w-full h-full text-white lg:max-w-[69.5em]'>
          <div className='grid grid-cols-1 mb-4 lg:grid-cols-3 gap-y-8'>
            <div className='hidden lg:block'>
              <p className='mb-4 text-2xl font-bold'>Links</p>
              <ul className='flex-col lg:flex gap-y-3'>
                {links.map((link) => (
                  <li>
                    <Link to={link.slug} className='text-lg hover:underline'>
                      {link.page}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className='flex flex-col'>
              <header className='mb-4 text-2xl font-bold'>
                Connect with us
              </header>
              <p className='text-lg'>
                Pulo Diezmo Rd, Pulo, Cabuyao, Laguna 4026, Philippines
              </p>
              <p className='text-lg'>acm.mclstudchapter@gmail.com</p>
            </div>

            <div className='lg:flex lg:justify-end'>
              <div className='flex flex-col'>
                <header className='mb-4 text-2xl font-bold'>
                  Keep in touch
                </header>
                <ul className='flex flex-row lg:flex-col gap-y-3 gap-x-4'>
                  {socialLinks.map(({ link, icon, slug }) => (
                    <a href={link} key={link} target='_blank' rel='noreferrer'>
                      <div className='flex flex-row items-center gap-3 hover:underline'>
                        <div>{icon}</div>
                        <p className='hidden text-lg sm:block'>{slug}</p>
                      </div>
                    </a>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <p className='text-lg font-light text-center'>
            © {year} Malayan Colleges Laguna ACM Student Chapter
          </p>
        </section>
      </main>
    </footer>
  );
}
