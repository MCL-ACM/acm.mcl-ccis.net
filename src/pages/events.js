import React, { useState } from 'react';
import { graphql } from 'gatsby';
import EventDropdown from '../components/events/EventDropdown';

export default function events({ data }) {
  const [year, setYear] = useState(2019);
  console.log(data.allJson.edges);

  return (
    <div className='flex flex-col items-center'>
      <header className='text-center pb-8'>
        <h1 className='text-oxford-blue text-4xl font-bold'>Our Initiatives</h1>
        <h3 className='text-darkish-blue text-2xl font-medium'>Events</h3>
      </header>
      <EventDropdown year={year} />
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
