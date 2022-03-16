import React, { useState } from 'react';
import { graphql } from 'gatsby';
import EventDropdown from '../components/events/EventDropdown';
import EventCard from '../components/events/EventCard';
import sampleImage from '../images/about/how_we_started.png';

export default function events({ data }) {
  const [year, setYear] = useState('All');

  let selectedEvents = [];

  data.allJson.edges.map(({ node }) => {
    const eventYear = new Date(node.year).getFullYear();

    // eslint-disable-next-line radix
    if (parseInt(eventYear) === year) {
      selectedEvents.push(node);
    } else if (year === 'All') {
      selectedEvents = [...data.allJson.edges];
    }
    return undefined;
  });

  console.log(selectedEvents[0]);

  return (
    <div className='w-full'>
      <div className='flex flex-col text-center items-center w-full'>
        <header className='text-center pb-8 w-full'>
          <h1 className='text-oxford-blue text-4xl font-bold'>
            Our Initiatives
          </h1>
          <h3 className='text-darkish-blue text-2xl font-medium'>Events</h3>
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
