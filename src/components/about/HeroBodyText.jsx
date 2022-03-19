import React from 'react';

export default function HeroBodyText({ className }) {
  return (
    <div
      className={`text-2xl text-center text-rich-black leading-[180%] tracking-wide ${className}`}
    >
      <p>
        MCL-ACM fosters computing excellence within its members and the MCL
        community by hosting programming-related events and peer mentoring for
        IT courses. It also aims to build a versatile community and encourage
        relaxation by providing social events for the students to enjoy.
      </p>
    </div>
  );
}
