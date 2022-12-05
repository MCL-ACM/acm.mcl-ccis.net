import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Socials() {
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
  return (
    <div className='flex flex-row justify-evenly'>
      {socialLinks.map(({ link, icon, slug }) => (
        <a href={link} key={link} target='_blank' rel='noreferrer' className=''>
          <div>{icon}</div>
        </a>
      ))}
    </div>
  );
}
