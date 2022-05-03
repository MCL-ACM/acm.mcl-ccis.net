import React, { useEffect, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { motion, AnimatePresence } from 'framer-motion';
import HeroBanner from '../common/hero/HeroBanner';
import ImageWithCaption from '../common/ImageWithCaption';

export default function HomeBanner() {
  const query = graphql`
    query MyQuery {
      allHomeSlideshow {
        edges {
          node {
            id
            content {
              caption
              image {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    }
  `;
  const content = useStaticQuery(
    query,
  ).allHomeSlideshow.edges[0].node.content.map((e) => ({
    ...e,
    image: e.image.childImageSharp,
  }));

  const [index, setIndex] = useState(0);
  const updateIndex = () => {
    setIndex((previousIndex) => (previousIndex + 1) % content.length);
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
              <ImageWithCaption
                image={
                  <GatsbyImage
                    image={getImage(content[index].image)}
                    className='w-auto h-full'
                    alt='Home hero'
                  />
                }
                message={content[index].caption}
                className='w-auto h-full'
                hiddenMobile
              />
            </motion.div>
          </AnimatePresence>
        </div>
      }
    />
  );
}
