import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from 'popmotion';
import EventCard from './EventCard';
import CarouselIndicator from './CarouselIndicator';
import EventCardContent from './EventCardContent';

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

export default function CarouselEventCard({ events, tagged }) {
  const [[page, direction], setPage] = useState([0, 0]);
  const eventIndex = wrap(0, events.length, page);
  const currentEvent = events[eventIndex];

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <EventCard>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
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
          className='absolute flex flex-col items-center w-full h-full gap-6 align-middle px-9'
        >
          <EventCardContent
            tagged={tagged}
            tags={currentEvent.tags}
            title={currentEvent.title}
            year={currentEvent.year}
            img={currentEvent.img}
            imageAlt={currentEvent.imageAlt}
            description={currentEvent.description}
          />
        </motion.div>
      </AnimatePresence>
      <CarouselIndicator eventCount={events.length} eventIndex={eventIndex} />
    </EventCard>
  );
}
