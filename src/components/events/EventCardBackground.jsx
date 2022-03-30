import React from 'react';
import { motion } from 'framer-motion';

const variants = {
  rest: {
    boxShadow: '8px 8px 0 2px hsla(199, 77%, 94%)',
  },
  hover: {
    boxShadow: '15px 15px 0 2px hsla(199, 77%, 96%)',
    originX: 25,
  },
  lineHover: {},
};

export default function EventCardBackground({ shadow, children, className }) {
  const hasShadow = shadow ? variants : {};
  return (
    <motion.article
      initial='rest'
      whileHover='hover'
      variants={hasShadow}
      className={`w-[20.9375em] h-[32em] relative rounded-bl-3xl rounded-br-3xl border-[0.55px] border-gray-200 overflow-hidden bg-white ${className}`}
    >
      <motion.span className='absolute block w-full h-[4px] bg-gradient-to-r from-cerulean-crayola to-standard-blue' />
      {children}
    </motion.article>
  );
}
