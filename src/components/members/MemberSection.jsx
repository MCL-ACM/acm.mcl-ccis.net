import React, { useEffect } from 'react';

import { motion, AnimatePresence } from 'framer-motion';
import MemberInfo from './MemberInfo';

export default function MemberSection({
  itemsToDisplay = [],
  direction = 'right',
  className,
}) {
  const variants = {
    enter: (direction) => ({
      x: direction === 'right' ? '100%' : '-100%',
      opacity: 0,
      position: 'absolute',
    }),
    center: {
      x: '0%',
      opacity: 1,
      position: 'absolute',
    },
    exit: (direction) => ({
      x: direction === 'right' ? '-100%' : '100%',
      opacity: 0,
      position: 'absolute',
    }),
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <AnimatePresence initial={true}>
        <motion.div
          key={`${itemsToDisplay.map((item) => item.name).join(', ')}`}
          custom={direction}
          variants={variants}
          initial='enter'
          animate='center'
          exit='exit'
          transition={{ duration: 0.5 }}
          className='flex flex-row flex-wrap justify-start gap-y-8 lg:gap-y-10'
          style={{ width: '100%', height: '100%', position: 'absolute' }}
        >
          {itemsToDisplay.map((member) => (
            <MemberInfo
              key={member.name}
              name={member.name}
              position={member.position}
              photo={member.photo}
              className='col-span-3 w-[25%]'
            />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
