import * as React from "react";
import EventCard from "./EventCard";
import eventImage from "../../images/home/IMG_3227.jpg";

export default function EventCollection() {
  const data = [
    {
      title: "Introduction to Virtual Reality and Augmented Reality ",
      image: eventImage,
      year: "2019",
      summary:
        "MCL-ACM conducted its first seminar in the 'CCIS Technology Seminar Series' about VR and AR technology during MCL's 13th Foundation Day.",
    },
    {
      title: "Introduction to Virtual Reality and Augmented Reality ",
      image: eventImage,
      year: "2019",
      summary:
        "MCL-ACM conducted its first seminar in the 'CCIS Technology Seminar Series' about VR and AR technology during MCL's 13th Foundation Day.",
    },
    {
      title: "Introduction to Virtual Reality and Augmented Reality ",
      image: eventImage,
      year: "2019",
      summary:
        "MCL-ACM conducted its first seminar in the 'CCIS Technology Seminar Series' about VR and AR technology during MCL's 13th Foundation Day.",
    },
  ];

  let currentData = data[0];

  return (
    <EventCard
      title={currentData.title}
      image={currentData.image}
      year={currentData.year}
      summary={currentData.summary}
    />
  );
}
