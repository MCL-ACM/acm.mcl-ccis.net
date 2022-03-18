import React, { useEffect, useRef, useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { motion } from 'framer-motion';
import Button from '../common/buttons/Button';
import EventsDecoration from './decorations/EventsDecoration';
import DesktopEventsDecoration from './decorations/DesktopEventsDecoration';
import CarouselEventCard from '../events/CarouselEventCard';
import SingleEventCard from '../events/SingleEventCard';

export default function EventsSection() {
  const query = graphql`
    query GetHomeEvents {
      allEvent(sort: { fields: year, order: DESC }) {
        edges {
          node {
            title
            year(formatString: "YYYY")
            tags
            summary
            images {
              image {
                childImageSharp {
                  gatsbyImageData
                }
                name
              }
              imageAlt
            }
          }
        }
      }
    }
  `;

  const data = useStaticQuery(query);

  const events = data.allEvent.edges.map(({ node: event }) => ({
    img: event.images[0].image,
    description: event.summary,
    ...event,
  }));

  const [width, setWidth] = useState(0);
  const carousel = useRef();
  useEffect(() => {
    console.log(carousel.current.scrollWidth - carousel.current.offsetWidth);
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  return (
    <div className='relative mt-12 mb-8'>
      <EventsDecoration className='absolute sm:hidden -bottom-20 max-h-fit z-[-1]' />
      <DesktopEventsDecoration className='hidden sm:block sm:absolute top-32 z-[-1] w-full h-[90%]' />

      <section className='z-[1]'>
        <hgroup className='flex flex-col self-start gap-3 px-5 mb-4 text-left sm:mb-20 fixed-width'>
          <h2 className='text-3xl font-bold text-oxford-blue sm:text-6xl'>
            Fulfilling our Vision
          </h2>
          <h3 className='text-xl font-medium text-darkish-blue sm:text-4xl'>
            Events
          </h3>
        </hgroup>
        <div className=''>
          <div className='flex flex-col items-center sm:hidden'>
            <CarouselEventCard events={events} />
          </div>
          <div>
            <motion.div
              ref={carousel}
              className='overflow-hidden'
              whileTap={{ cursor: 'grabbing' }}
            >
              <motion.div
                drag='x'
                dragConstraints={{
                  left: -width,
                  right: width,
                }}
                className='flex-row justify-center hidden gap-28 sm:flex'
              >
                {events.map((event) => (
                  <div className='block'>
                    <SingleEventCard event={event} />
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div className='flex flex-col items-center mt-14'>
          <Link to='/events'>
            <Button
              text='See all our events'
              textColor='text-oxford-blue'
              color='bg-white'
              glow
              icon={<FiArrowRight size='1.3em' />}
            />
          </Link>
        </div>
      </section>
    </div>
  );
}
