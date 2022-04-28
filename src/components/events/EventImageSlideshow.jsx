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

export default function EventImageSlideshow({ images }) {
  const [[page, direction], setPage] = useState([0, 0]);
  const eventIndex = wrap(0, images.length, page);
  const currImage = images[eventIndex];

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div className='flex flex-col justify-between pt-12 sm:pt-2 h-full'>
      <div>
        <div className='px-0 sm:px-20'>
          <ul className='flex items-center justify-center w-full min-w-0 overflow-x-scroll no-scrollbar pb-4'>
            {Array(images.length)
              .fill()
              .map((_, index) => (
                <motion.li key={images[index]} className=''>
                  <button
                    type='button'
                    onClick={() =>
                      setPage([index, eventIndex > index ? -1 : 1])
                    }
                    className={`w-16 h-9 overflow-hidden shrink-0 ${
                      index === eventIndex ? 'ring-white ring-2' : ''
                    }`}
                  >
                    <GatsbyImage
                      image={getImage(images[index].image)}
                      alt={images[index].imageAlt}
                      className='w-full h-full'
                      objectFit='cover'
                    />
                  </button>
                </motion.li>
              ))}
          </ul>
        </div>
      </div>

      <div className='relative h-full w-full'>
        <div className='z-20 left-0 absolute top-1/2 pl-4 hidden sm:block'>
          <AiOutlineLeft size={36} onClick={() => paginate(-1)} />
        </div>
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
            className='absolute h-full w-full object-contain px-0 sm:px-16'
          >
            <GatsbyImage
              image={getImage(currImage.image)}
              alt={currImage.imageAlt}
              className='w-full h-full'
              objectFit='contain'
            />
          </motion.div>
        </AnimatePresence>
        <div className='z-20 right-0 absolute top-1/2 pr-4 hidden sm:block'>
          <button type='button' onClick={() => paginate(1)}>
            <AiOutlineRight size={36} />
          </button>
        </div>
      </div>
    </div>
  );
}
