import React from 'react';

import { motion, AnimatePresence } from 'framer-motion';
import MemberInfo from './MemberInfo';

export default function ExecutiveSection({ officers }) {
  const variants = {
    enter: {
      x: '100%',
      opacity: 0,
    },
    center: {
      x: 0,
      opacity: 1,
    },
    exit: {
      x: '-100%',
      opacity: 0,
    },
  };

  return (
    <div className='relative overflow-hidden min-h-[450px]'>
      <AnimatePresence>
        <motion.div
          key={officers.map(({ name }) => name).join(',')} // Unique key to trigger animations
          variants={variants}
          initial='enter'
          animate='center'
          exit='exit'
          transition={{ duration: 0.5 }}
          className='grid grid-cols-2 lg:grid-cols-4 gap-y-8 lg:gap-y-10'
          style={{ width: '100%', height: '100%', position: 'absolute' }}
        >
          {officers.map(({ name, position, photo }, index) => (
            <div
              key={name} // Unique key for each item
              className={`flex flex-col items-center ${
                index === 0 && 'col-span-2 lg:col-span-4'
              }`}
            >
              <MemberInfo name={name} position={position} photo={photo} />
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
