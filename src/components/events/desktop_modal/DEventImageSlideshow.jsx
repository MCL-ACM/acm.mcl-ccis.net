import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from 'popmotion';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

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

export default function DEventImageSlideshow({ images }) {
  const [[page, direction], setPage] = useState([0, 0]);
  const eventIndex = wrap(0, images.length, page);
  const currImage = images[eventIndex];
  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };
  return (
    <div className='flex flex-col h-full gap-y-2'>
      <div className='flex w-full h-full relative justify-center item-center px-8'>
        <div className='mt-auto mb-auto z-20'>
          <AiOutlineLeft size={36} onClick={() => paginate(-1)} />
        </div>
        <div className='relative w-full h-full overflow-hidden object-contain'>
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={page}
              custom={direction}
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
              className='absolute flex flex-col items-center w-full z-50 object-contain'
            >
              <GatsbyImage
                image={getImage(currImage.image)}
                alt={currImage.imageAlt}
                className='w-[820px] h-[420px] pointer-events-none object-contain'
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className='mt-auto mb-auto z-20'>
          <button type='button' onClick={() => paginate(1)}>
            <AiOutlineRight size={36} />
          </button>
        </div>
      </div>

      <div>
        <ul className='px-24 flex items-center w-full min-w-0 overflow-x-scroll no-scrollbar justify-center pb-7'>
          {Array(images.length)
            .fill()
            .map((_, index) => (
              <motion.li key={images[index]} className=''>
                <button
                  type='button'
                  onClick={() => setPage([index, eventIndex > index ? -1 : 1])}
                  className={`w-24 h-14 object-contain overflow-hidden shrink-0 ${
                    index === eventIndex ? 'ring-standard-blue ring-1' : ''
                  }`}
                >
                  <GatsbyImage
                    image={getImage(images[index].image)}
                    alt={images[index].imageAlt}
                    className='w-full h-full object-contain'
                  />
                </button>
              </motion.li>
            ))}
        </ul>
      </div>
    </div>
  );
}
