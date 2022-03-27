import React, { useEffect, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { motion, AnimatePresence } from 'framer-motion';
import HeroBanner from '../common/hero/HeroBanner';

export default function HomeBanner() {
  const query = graphql`
    query GetHeroSlideshowImages {
      allFile(filter: { sourceInstanceName: { eq: "heroSlideshow" } }) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  `;
  const images = useStaticQuery(query).allFile.edges.map(
    ({ node }) => node.childImageSharp,
  );

  const [index, setIndex] = useState(0);
  const updateIndex = () => {
    setIndex((previousIndex) => (previousIndex + 1) % images.length);
  };
  useEffect(() => {
    const nextImageDelay = 15000;
    const interval = setInterval(() => updateIndex(), nextImageDelay);

    return () => clearInterval(interval);
  }, []);

  return (
    <HeroBanner
      image={
        <div className='relative w-full bg-black h-96'>
          <AnimatePresence>
            <motion.div
              className='absolute w-full h-full aspect-[3/2]'
              key={index}
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <GatsbyImage
                image={getImage(images[index])}
                className='w-auto h-full'
                alt='Home hero'
              />
            </motion.div>
          </AnimatePresence>
        </div>
      }
    />
  );
}
