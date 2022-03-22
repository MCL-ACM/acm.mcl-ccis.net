import React from 'react';
import EventCardBackground from './EventCardBackground';
import EventCardContent from './EventCardContent';

export default function SingleEventCard({ event, tagged, shadow }) {
  return (
    <EventCardBackground shadow={shadow}>
      <EventCardContent
        tagged={tagged}
        tags={event.tags}
        title={event.title}
        year={event.year}
        img={event.images[0].image}
        imageAlt={event.images[0].imageAlt}
        description={event.description}
        linky
      />
    </EventCardBackground>
  );
}
