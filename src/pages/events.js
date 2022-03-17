import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import EventDropdown from '../components/events/EventDropdown';
import CarouselEventCard from '../components/events/CarouselEventCard';

export default function events({ data }) {
  const [year, setYear] = useState('All');
  const [selectedEvents, setSelectedEvents] = useState([]);

  useEffect(() => {
    const eventNodes = data.allEvent.edges.map(({ node }) => ({
      image: node.image && node.image[0] && node.images[0].image,
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
    <div className='w-full'>
      <div className='flex flex-col items-center w-full text-center'>
        <header className='w-full pb-8 text-center'>
          <h1 className='text-4xl font-bold text-oxford-blue'>
            Our Initiatives
          </h1>
          <h3 className='text-2xl font-medium text-darkish-blue'>Events</h3>
        </header>
        <div className='pb-4'>
          <EventDropdown year={year} changeYear={setYear} />
        </div>
        <CarouselEventCard shadow tagged events={selectedEvents} />
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
