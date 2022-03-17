import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import { Link } from 'gatsby';

export default function Footer() {
  const year = new Date().getFullYear();

  const socialLinks = [
    {
      link: 'https://twitter.com/MCL_ACM',
      icon: <FaTwitter size={35} />,
    },
    {
      link: 'https://fb.me/acmMCL',
      icon: <FaFacebook size={35} />,
    },
    {
      link: 'https://www.instagram.com/acm_mcl/',
      icon: <FaInstagram size={35} />,
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
      <main className='h-full px-5 pt-24 pb-10 bg-gradient-to-tr from-standard-blue to-cerulean-crayola'>
        <section className='flex flex-col justify-between w-full h-full text-white'>
          <div className='flex flex-col gap-y-[2.375rem]'>
            <div className='flex justify-between w-full'>
              <article className='flex flex-col gap-y-[1.0625rem]'>
                <header className='text-sm font-light'>Connect with us</header>
                <p className='text-lg'>
                  Pulo Diezmo Rd, Pulo, Cabuyao, Laguna 4026, Philippines
                </p>
                <p className='text-lg'>acm.mclstudchapter@gmail.com</p>
              </article>

              <ul className='hidden text-2xl font-medium lg:flex gap-x-16'>
                {links.map((link) => (
                  <li>
                    <Link to={link.slug}>{link.page}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className='lg:flex lg:justify-end'>
              <div className='flex flex-col gap-y-[1.0625rem]'>
                <header className='text-sm font-light'>Keep in touch</header>
                <ul className='flex gap-x-4'>
                  {socialLinks.map(({ link, icon }) => (
                    <a href={link} key={link} target='_blank' rel='noreferrer'>
                      {icon}
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
