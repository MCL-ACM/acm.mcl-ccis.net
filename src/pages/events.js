import React, { useState } from 'react';
import { graphql } from 'gatsby';
import EventDropdown from '../components/events/EventDropdown';
import EventCard from '../components/events/EventCard';

export default function events({ data }) {
  const [year, setYear] = useState('All');

  let selectedEvents = [];

  data.allJson.edges.map(({ node }) => {
    const eventYear = new Date(node.year).getFullYear();

    if (parseInt(eventYear, 10) === year) {
      selectedEvents.push(node);
    } else if (year === 'All') {
      selectedEvents = [...data.allJson.edges];
    }
    return undefined;
  });

  return (
    <div className='w-full'>
      <div className='flex flex-col items-center w-full text-center'>
        <header className='w-full pb-8 text-center'>
          <h1 className='text-4xl font-bold text-oxford-blue'>
            Our Initiatives
          </h1>
          <h3 className='text-2xl font-medium text-darkish-blue'>Events</h3>
        </header>
        <EventDropdown year={year} changeYear={setYear} />
        <EventCard shadow tagged carousel events={selectedEvents} />
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
          year
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
