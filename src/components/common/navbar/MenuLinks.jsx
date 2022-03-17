import React from 'react';
import { motion } from 'framer-motion';
import MenuLink from './MenuLink';

const sliding = {
  open: {
    transition: { staggerChildren: 0.04, delayChildren: 0.1 },
  },
  closed: {
    transition: { staggerChildren: 0.04, staggerDirection: -1 },
  },
};

export default function MenuLinks({ links, toggle }) {
  return (
    <motion.ul variants={sliding} className='pl-0 '>
      {links.map(({ page, slug, key }) => (
        <MenuLink toggle={toggle} page={page} slug={slug} key={key} />
      ))}
    </motion.ul>
  );
}
