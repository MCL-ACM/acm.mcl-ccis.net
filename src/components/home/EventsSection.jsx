import * as React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Button from '../common/buttons/Button';
import SectionHeader from './SectionHeader';
import EventsDecoration from './EventsDecoration';
import CarouselEventCard from '../events/CarouselEventCard';

export default function EventsSection() {
  const query = graphql`
    query GetEvents {
      allJson(limit: 3, sort: { fields: year, order: DESC }) {
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

  return (
    <div className='relative mt-12 mb-8'>
      <EventsDecoration
        className='absolute -bottom-20 max-h-fit'
        style={{ 'z-index': '-10' }}
      />
      <section className='z-10 px-5'>
        <div className='mb-4'>
          <SectionHeader header='Fulfilling our Vision' subheader='Events' />
        </div>
        <div className='flex flex-col items-center gap-8'>
          <CarouselEventCard
            events={data.allJson.edges.map(({ node: event }) => ({
              img: event.images[0].image,
              description: event.summary,
              ...event,
            }))}
          />
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
