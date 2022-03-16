import React from 'react';
import { motion } from 'framer-motion';

export default function Button({
  glow,
  textColor,
  color,
  text,
  icon,
  callback,
}) {
  const isGlowing = glow ? 'shadow-button-glow-white' : 'shadow';

  return (
    <motion.button
      onClick={callback}
      whileHover={{
        y: '-6%',
      }}
      whileTap={{
        y: '0%',
      }}
      className={`${isGlowing} ${textColor} ${color} py-2.5 px-4 flex flex-row justify-center align-middle items-center rounded-full gap-2`}
    >
      {icon}
      <p className='font-mono text-lg'>{text}</p>
    </motion.button>
  );
}
