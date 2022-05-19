import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import { useCycle } from 'framer-motion';
import EventDropdown from '../components/events/EventDropdown';
import CarouselEventCard from '../components/events/CarouselEventCard';
import FeaturedEventCard from '../components/events/FeaturedEventCard';
import HeroDecoration from '../components/common/decorations/HeroDecoration';
import SingleEventCard from '../components/events/SingleEventCard';
import Head from '../components/common/Head';
import Divider from '../components/common/Divider';
import EventModal from '../components/events/EventModal';
import TagDropdown from '../components/events/TagDropdown';

export default function events({ data }) {
  const [year, setYear] = useState('All');
  const [tag, setTag] = useState('All');
  const [selectedEvents, setSelectedEvents] = useState([]);
  const [isOpen, toggleOpen] = useCycle(false, true);
  const [isFeaturedOpen, toggleFeaturedOpen] = useCycle(false, true);
  const [selectedEvent, setSelectedEvent] = useState();
  const titleCase = (s) =>
    s.replace(
      /\w\S*/g,
      (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(),
    );
  const eventNodes = data.allEvent.edges.map(({ node }) => ({
    image: node.images && node.images[0] && node.images[0].image,
    description: node.summary,
    ...node,
    tags: node.tags.map(titleCase),
  }));

  const tags = Array.from(
    new Set(eventNodes.reduce((prev, curr) => [...prev, ...curr.tags], [])),
  ).sort();

  useEffect(() => {
    setSelectedEvents(() => {
      const eventsFilteredByYear =
        year === 'All'
          ? eventNodes
          : eventNodes.filter((event) => {
              const eventYear = new Date(event.year).getFullYear();
              return eventYear === year;
            });
      const eventsFilteredByTags =
        tag === 'All'
          ? eventsFilteredByYear
          : eventsFilteredByYear.filter((event) => event.tags.includes(tag));

      return eventsFilteredByTags;
    });
  }, [year, tag]);

  return (
    <div className='w-full lg:mt-[4.8125em] relative pb-[9.25em]'>
      <Head title='Events' />
      <section className=''>
        {selectedEvents.length > 0 && isFeaturedOpen ? (
          <EventModal
            tagged
            event={selectedEvents[11]}
            toggle={() => toggleFeaturedOpen()}
          />
        ) : (
          <div />
        )}
        <HeroDecoration className='absolute hidden lg:block' />
        <div className='hidden lg:flex fixed-width relative pb-[5.8125em]'>
          <div className='pt-11'>
            <header>
              <h1 className='text-4xl font-bold leading-10 lg:text-7xl text-oxford-blue'>
                Our Initiatives
              </h1>
              <h5 className='text-4xl font-bold lg:mt-9 text-darkish-blue'>
                Events
              </h5>
            </header>
          </div>
          <FeaturedEventCard toggle={() => toggleFeaturedOpen()} />
        </div>
        <Divider className='lg:my-24 mx-5 lg:mx-0 lg:w-11/12 lg:h-[2px] lg:shadow-none hidden lg:block' />

        <section className='fixed-width hidden lg:block text-center pt-[5.8125em] min-h-[830px]'>
          <div>
            <p className='mb-16 text-5xl font-bold text-oxford-blue'>
              {(() => {
                if (year === 'All' && tag === 'All') return 'All Events';
                if (tag === 'All') return `Events for Year ${year}`;
                if (year === 'All') return `Events with ${tag} Tag`;
                return `Events for Year ${year} with ${tag} Tag`;
              })()}
            </p>
          </div>
          <div className='flex flex-row gap-8'>
            <EventDropdown year={year} changeYear={setYear} />
            <TagDropdown
              selectedTag={tag}
              onNewTagSelected={setTag}
              tags={tags}
            />
          </div>
          <main className='flex flex-wrap pt-[3.8125em] gap-x-[3.3125em] gap-y-36 justify-center'>
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
        <div className='flex flex-col w-[24.9375em] gap-4 px-8 pb-8'>
          <EventDropdown year={year} changeYear={setYear} />
          <TagDropdown
            selectedTag={tag}
            onNewTagSelected={setTag}
            tags={tags}
          />
        </div>
        <CarouselEventCard shadow={false} tagged events={selectedEvents} />
      </div>
    </div>
  );
}

export const query = graphql`
  query GetEvents {
    allEvent(sort: { fields: year, order: DESC }) {
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
