import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from 'popmotion';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const variants = {
  // eslint-disable-next-line arrow-body-style
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  // eslint-disable-next-line arrow-body-style
  exit: (direction) => {
    return { zIndex: 0, x: direction < 0 ? 1000 : -1000, opacity: 0 };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => Math.abs(offset) * velocity;

export default function EventCard({
  events = [],
  tagged,
  carousel,
  event,
  shadow,
}) {
  const [[page, direction], setPage] = useState([0, 0]);

  const eventIndex = wrap(0, events.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div>
      {console.log(events)}
      {events.length > 0 ? (
        <article
          className={`${
            shadow ? 'shadow-xl ' : ''
          }items-center w-[20.9375em] h-[34.25em] relative rounded-bl-3xl rounded-br-3xl border-[0.55px] border-gray-200 overflow-hidden`}
        >
          <span className='absolute block w-full h-[4px] bg-gradient-to-r from-cerulean-crayola to-standard-blue' />

          {carousel ? (
            <>
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={eventIndex}
                  custom={direction}
                  variants={variants}
                  initial='enter'
                  animate='center'
                  exit='exit'
                  transition={{
                    x: {
                      type: 'spring',
                      stiffness: 300,
                      damping: 30,
                    },
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
                  className='flex flex-col gap-6 w-full align-middle items-center px-9 absolute h-full'
                >
                  <ul
                    className={`${
                      tagged ? 'visible ' : 'hidden '
                    }flex space-x-3 absolute pt-7 px-9 w-full flex-wrap`}
                  >
                    {events[eventIndex].node.tags.map((tag) => (
                      <li
                        key={tag}
                        className='bg-standard-blue text-white font-bold text-xs py-[4px] px-[10px] rounded-lg'
                      >
                        {tag.toUpperCase()}
                      </li>
                    ))}
                  </ul>

                  <header className='flex flex-col gap-2 text-center pt-[72px]'>
                    <h1 className='text-lg font-bold text-oxford-blue'>
                      {events[eventIndex].node.title}
                    </h1>
                    <h5 className='text-base font-light text-maximum-blue-green'>
                      {new Date(events[eventIndex].node.year).getFullYear()}
                    </h5>
                  </header>

                  <GatsbyImage
                    height='181px'
                    width='263px'
                    image={getImage(events[eventIndex].node.images[0].image)}
                    alt={events[eventIndex].node.images[0].imageAlt}
                  />

                  <p className='text-sm font-light text-center text-rich-black'>
                    {events[eventIndex].node.description}
                  </p>
                </motion.div>
              </AnimatePresence>
              <ul className='flex justify-center absolute bottom-0 w-full gap-3 mb-8'>
                {events.map((_, index) => (
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
            </>
          ) : (
            <div className='flex flex-col gap-6 w-full align-middle items-center px-9 absolute'>
              <ul
                className={`${
                  tagged ? 'visible ' : 'hidden '
                }flex space-x-3 absolute pt-7 px-9 w-full flex-wrap`}
              >
                {event.tags.map((tag) => (
                  <li
                    key={tag}
                    className='bg-standard-blue text-white font-bold text-xs py-[4px] px-[10px] rounded-lg'
                  >
                    {tag.toUpperCase()}
                  </li>
                ))}
              </ul>
              <header className='flex flex-col gap-2 text-center pt-[72px]'>
                <h1 className='text-lg font-bold text-oxford-blue'>
                  {event.title}
                </h1>
                <h5 className='text-base font-light text-maximum-blue-green'>
                  {event.year}
                </h5>
              </header>

              <img
                height='181px'
                width='263px'
                src={event.img}
                alt={events.imageAlt}
              />
              <p className='text-sm font-light text-center text-rich-black'>
                {event.description}
              </p>
            </div>
          )}
        </article>
      ) : (
        <div className=' py-12 text-3xl text-slate-500 opacity-70 font-bold'>
          No Events Found . . .
        </div>
      )}
    </div>
  );
}
