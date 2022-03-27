import React, { useEffect, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { motion, AnimatePresence } from 'framer-motion';
import HeroBanner from '../common/hero/HeroBanner';

export default function HomeBanner() {
  const data = useStaticQuery(graphql`
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
  `);
  const images = data.allFile.edges.map(({ node }) => (
    <GatsbyImage
      image={getImage(node.childImageSharp)}
      className='w-auto h-full'
    />
  ));
  const [index, setIndex] = useState(0);
  const updateIndex = () => {
    setIndex((previousIndex) => (previousIndex + 1) % images.length);
  };

  useEffect(() => {
    const nextImageDelay = 10000;
    setInterval(() => updateIndex(), nextImageDelay);
  }, []);

  return (
    <HeroBanner
      image={
        <div className='relative w-full bg-black h-96'>
          <AnimatePresence>
            <motion.div
              className='absolute object-contain w-full h-full'
              key={index}
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {images[index]}
            </motion.div>
          </AnimatePresence>
        </div>
      }
    />
  );
}
