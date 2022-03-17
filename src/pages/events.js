import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import EventDropdown from '../components/events/EventDropdown';
import CarouselEventCard from '../components/events/CarouselEventCard';

export default function events({ data }) {
  const [year, setYear] = useState('All');
  const [selectedEvents, setSelectedEvents] = useState([]);

  useEffect(() => {
    const newEvents = [];

    data.allJson.edges.map(({ node }) => {
      const eventYear = new Date(node.year).getFullYear();
      console.log(eventYear);
      // eslint-disable-next-line radix
      if (eventYear === year) {
        newEvents.push(node);
      } else if (year === 'All') {
        newEvents.push(node);
      }

      return true;
    });

    setSelectedEvents((prevState) => [...newEvents]);
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
  query {
    allJson {
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
                gatsbyImageData
              }
            }
            imageAlt
          }
        }
      }
    }
  }
`;
