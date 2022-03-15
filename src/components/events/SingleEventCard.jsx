import React from 'react';
import EventCard from './EventCard';
import EventCardContent from './EventCardContent';

export default function SingleEventCard({ event, tagged }) {
  return (
    <EventCard>
      <EventCardContent
        tagged={tagged}
        tags={event.tags}
        title={event.title}
        year={event.title}
        img={event.img}
        imageAlt={event.imageAlt}
        description={event.description}
      />
    </EventCard>
  );
}
