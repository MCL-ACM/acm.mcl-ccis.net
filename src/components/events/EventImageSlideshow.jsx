import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from 'popmotion';

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => Math.abs(offset) * velocity;

export default function EventImageSlideshow({ images }) {
  const [[page, direction], setPage] = useState([0, 0]);
  const eventIndex = wrap(0, images.length, page);
  const currImage = images[eventIndex];

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div className='mt-14 sm:mt-1'>
      <ul className='flex items-center w-full min-w-0 gap-4 p-2 overflow-x-scroll sm:mb-1 no-scrollbar fixed-width'>
        {Array(images.length)
          .fill()
          .map((_, index) => (
            <motion.li key={images[index]} className='w-full h-full'>
              <button
                type='button'
                onClick={() => setPage([index, eventIndex > index ? -1 : 1])}
                className={`w-14 h-14 overflow-hidden rounded-lg shrink-0 ${
                  index === eventIndex ? 'ring-white ring-2' : ''
                }`}
              >
                <img src={images[index]} alt='test' className='w-full h-full' />
              </button>
            </motion.li>
          ))}
      </ul>
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={page}
          custom={direction}
          src={currImage}
          variants={variants}
          initial='enter'
          animate='center'
          exit='exit'
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag='x'
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);
            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
          className='absolute max-h-[235px] w-full object-cover'
        />
      </AnimatePresence>
    </div>
  );
}
