import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { useCycle } from 'framer-motion';
import CarouselEventCard from '../components/events/CarouselEventCard';
import SingleEventCard from '../components/events/SingleEventCard';
import sampleImg from '../images/image-sample.png';
import Button from '../components/common/buttons/Button';
import EventModal from '../components/events/EventModal';

export default function components() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const events = [
    {
      tags: ['vr', 'seminar', 'external'],
      title: 'Introduction to Virtual Reality and Augmented Reality ',
      year: '2022',
      description:
        'MCL-ACM conducted its first seminar in the ‘CCIS Technology Seminar Series’ about VR and AR technology during MCL’s 13th Foundation Day.',
      img: sampleImg,
      imgAlt: 'vr group picture',
    },
    {
      tags: ['asd', 'sad', 'dsa'],
      title: 'test2',
      year: '2021',
      description: 'this is a test card2',
      img: '../../images/acm_logo.png',
      imgAlt: 'vr group picture',
    },
    {
      tags: ['asd', 'sad', 'dsa'],
      title: 'test3',
      year: '2020',
      description: 'this is a test card3',
      img: '../../images/acm_logo.png',
      imgAlt: 'vr group picture',
    },
  ];

  const event = {
    tags: ['vr', 'seminar', 'external'],
    title: 'Introduction to Virtual Reality and Augmented Reality ',
    year: '2022',
    description:
      'MCL-ACM conducted its first seminar in the ‘CCIS Technology Seminar Series’ about VR and AR technology during MCL’s 13th Foundation Day.',
    img: sampleImg,
    imgAlt: 'vr group picture',
  };
  return (
    <div>
      <button type='button' onClick={() => toggleOpen()}>
        test
      </button>
      {isOpen ? (
        <EventModal event={event} toggle={() => toggleOpen()} />
      ) : (
        <div />
      )}
    </div>
  );
}
