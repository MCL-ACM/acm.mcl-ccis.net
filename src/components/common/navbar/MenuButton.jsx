import React from 'react';
import { motion } from 'framer-motion';
import { GiHamburgerMenu } from 'react-icons/gi';

export default function MenuButton({ toggle }) {
  return (
    <motion.button onClick={toggle} className='relative z-50'>
      <GiHamburgerMenu className='text-3xl' />
    </motion.button>
  );
}
