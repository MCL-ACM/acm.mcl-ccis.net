import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import { useCycle } from 'framer-motion';
import EventDropdown from '../components/events/EventDropdown';
import CarouselEventCard from '../components/events/CarouselEventCard';
import FeaturedEventCard from '../components/events/FeaturedEventCard';
import HeroDecoration from '../components/common/decorations/HeroDecoration';
import SingleEventCard from '../components/events/SingleEventCard';
import DEventModal from '../components/events/desktop_modal/DEventModal';
import Head from '../components/common/Head';
import Divider from '../components/common/Divider';
import EventModal from '../components/events/EventModal';

export default function events({ data }) {
  const [year, setYear] = useState('All');
  const [selectedEvents, setSelectedEvents] = useState([]);
  const [isOpen, toggleOpen] = useCycle(false, true);
  const [isFeaturedOpen, toggleFeaturedOpen] = useCycle(false, true);
  const [selectedEvent, setSelectedEvent] = useState();

  useEffect(() => {
    const eventNodes = data.allEvent.edges.map(({ node }) => ({
      image: node.images && node.images[0] && node.images[0].image,
      description: node.summary,
      ...node,
    }));
    setSelectedEvents(() =>
      year === 'All'
        ? eventNodes
        : eventNodes.filter((event) => {
            const eventYear = new Date(event.year).getFullYear();
            return eventYear === year;
          }),
    );
  }, [year]);

  return (
    <div className='w-full lg:mt-[4.8125em] relative pb-[9.25em]'>
      <Head title='Events' />
      <section className=''>
        <HeroDecoration className='absolute hidden lg:block' />
        <div className='hidden lg:flex fixed-width relative pb-[5.8125em]'>
          <div className='pt-11'>
            <header>
              <h1 className='text-[4rem] font-bold text-oxford-blue'>
                Our Initiatives
              </h1>
              <h5 className='text-4xl font-bold text-darkish-blue'>Events</h5>
            </header>
          </div>
          <FeaturedEventCard toggle={() => toggleFeaturedOpen()} />
          {selectedEvents.length > 0 && isFeaturedOpen ? (
            <EventModal
              tagged
              event={selectedEvents[13]}
              toggle={() => toggleFeaturedOpen()}
            />
          ) : (
            <div />
          )}
        </div>
        <Divider className='lg:my-24 mx-5 lg:mx-0 lg:w-11/12 lg:h-[2px] lg:shadow-none hidden lg:block' />

        <section className='fixed-width hidden lg:block text-center pt-[5.8125em] min-h-[830px]'>
          <div className='max-w-[600px] ml-auto mr-auto'>
            <EventDropdown year={year} changeYear={setYear} />
          </div>
          <main className='flex flex-wrap pt-[6.8125em] gap-x-[3.3125em] gap-y-36 justify-center'>
            {selectedEvents.length > 0 ? (
              selectedEvents.map((currentEvent, index) => (
                <div>
                  <button
                    onClick={() => {
                      setSelectedEvent(index);
                      toggleOpen();
                    }}
                    type='button'
                  >
                    <SingleEventCard shadow tagged event={currentEvent} linky />
                  </button>
                </div>
              ))
            ) : (
              <div className='w-full py-12 font-bold text-center text-7xl text-slate-500 opacity-70'>
                No Events Found . . .
              </div>
            )}
            {isOpen ? (
              <EventModal
                tagged
                event={selectedEvents[selectedEvent]}
                toggle={() => toggleOpen()}
              />
            ) : (
              <div />
            )}
          </main>
          <div />
        </section>
      </section>

      <div className='flex flex-col items-center w-full text-center fixed-width lg:hidden'>
        <header className='w-full pb-8 text-center'>
          <h1 className='text-4xl font-bold text-oxford-blue'>
            Our Initiatives
          </h1>
          <h3 className='text-2xl font-medium text-darkish-blue'>Events</h3>
        </header>
        <div className='pb-4'>
          <EventDropdown year={year} changeYear={setYear} />
        </div>
        <CarouselEventCard shadow={false} tagged events={selectedEvents} />
      </div>
    </div>
  );
}

export const query = graphql`
  query GetEvents {
    allEvent {
      edges {
        node {
          id
          title
          year(formatString: "YYYY")
          tags
          summary
          description
          images {
            image {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
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
