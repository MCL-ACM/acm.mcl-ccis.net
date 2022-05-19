import React from 'react';
import { motion } from 'framer-motion';

const variants = {
  rest: {
    bottom: -15,
    right: -15,
  },
  hover: {
    bottom: -25,
    right: -25,
  },
};

export default function EventCardBackground({ shadow, children, className }) {
  const hasShadow = shadow ? variants : {};
  return (
    <motion.div
      initial='rest'
      whileHover='hover'
      className='relative w-[20.9375em] h-[32em] border-gray-200 bg-white rounded-bl-3xl rounded-br-3xl border-[0.55px]  '
    >
      <motion.article
        variants={hasShadow}
        className={`absolute w-[20.9375em] h-[32em] ${className} rounded-bl-3xl rounded-br-3xl -z-10`}
        style={{ background: 'hsla(199, 77%, 94%)' }}
      />
      <motion.span className='absolute block w-full h-[4px] bg-gradient-to-r from-cerulean-crayola to-standard-blue' />
      {children}
    </motion.div>
  );
}
