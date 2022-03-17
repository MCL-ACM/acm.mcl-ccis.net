import React from 'react';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';

const linkAnimation = {
  open: {
    x: '0',
    transition: {
      type: 'tween',
    },
  },
  closed: {
    x: '100%',
    transition: {
      type: 'tween',
    },
  },
};

export default function MenuLink({ page, slug, toggle }) {
  return (
    <motion.li
      variants={linkAnimation}
      className='mb-7 lg:mb-0'
      whileHover={{ scale: 1.05, fontWeight: 'normal' }}
      whileTap={{
        scale: 1,
        fontWeight: 'normal',
        transition: { duration: 0.05 },
      }}
    >
      <button type='button' onClick={toggle}>
        <Link
          to={slug}
          className={`${
            page === 'Contact Us'
              ? 'lg:bg-darkish-blue lg:text-white lg:py-4 lg:px-8 rounded-full '
              : ''
          }text-lg text-oxford-blue `}
          activeClassName='font-bold'
        >
          {page}
        </Link>
      </button>
    </motion.li>
  );
}
