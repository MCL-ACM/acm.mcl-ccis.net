import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { RiInstagramFill } from 'react-icons/ri';
import { Link } from 'gatsby';

export default function Footer() {
  const year = new Date().getFullYear();

  let socialIconSize = 60;

  const socialLinks = [
    {
      link: 'https://twitter.com/MCL_ACM',
      icon: <FaXTwitter size={socialIconSize} />,
    },
    {
      link: 'https://fb.me/acmMCL',
      icon: <FaFacebook size={socialIconSize} />,
    },
    {
      link: 'https://www.instagram.com/mcl_acm',
      icon: <RiInstagramFill size={socialIconSize} />,
    },
    {
      link: 'https://www.youtube.com/channel/UCuEfYX_hMeS3sSj5M0wHaYQ',
      icon: <FaYoutube size={socialIconSize} />,
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
      <main className='flex justify-center w-full h-full px-5 pt-24 pb-10 bg-[#212840] font-inter font-light'>
        <section className='flex flex-col justify-between w-full h-full text-white lg:max-w-[69.5em]'>
          <div className='grid grid-cols-1 mb-4 lg:grid-cols-3 gap-y-8'>
            <div className='hidden lg:block'>
              <p className='mb-4 text-4xl font-bold'>Links</p>
              <ul className='flex-col lg:flex gap-y-3 text-2xl'>
                {links.map((link) => (
                  <li>
                    <Link to={link.slug} className='hover:underline'>
                      {link.page}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className='flex flex-col'>
              <header className='mb-4 text-4xl font-extrabold'>
                Connect with us
              </header>
              <p className='text-2xl'>
                Pulo Diezmo Rd, Pulo, Cabuyao, Laguna 4026, Philippines
              </p>
              <p className='text-2xl'>acm.mclstudchapter@gmail.com</p>
            </div>

            <div className='lg:flex lg:justify-end'>
              <div className='flex flex-col'>
                <header className='mb-6 text-4xl font-bold'>
                  Keep in touch
                </header>
                <ul className='flex flex-wrap gap-y-12'>
                  {socialLinks.map(({ link, icon }) => (
                    <a
                      href={link}
                      key={link}
                      target='_blank'
                      rel='noreferrer'
                      className='w-1/4 lg:w-1/2 flex flex-row justify-center'
                    >
                      {icon}
                    </a>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <p className='text-3xl font-light text-center'>
            © {year} Mapúa Malayan Colleges Laguna ACM Student Chapter
          </p>
        </section>
      </main>
    </footer>
  );
}
