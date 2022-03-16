import React from 'react';
import { motion } from 'framer-motion';

export default function CarouselIndicator({ eventCount, eventIndex }) {
  return (
    <ul className='absolute bottom-0 flex justify-center w-full gap-3 mb-8'>
      {Array(eventCount)
        .fill()
        .map((_, index) => (
          <motion.li
            className='text-6xl text-darkish-blue'
            animate={{ scale: index === eventIndex ? 1.5 : 1 }}
          >
            <svg width='7' height='7' viewBox='0 0 7 7'>
              <path
                d='M3.5 7C1.57771 7 0 5.44038 0 3.49997C0 1.5777 1.55958 0 3.5 0C5.42229 0 7 1.55957 7 3.49997C7 5.44038 5.44042 7 3.5 7Z'
                fill='#184E77'
              />
            </svg>
          </motion.li>
        ))}
    </ul>
  );
}
