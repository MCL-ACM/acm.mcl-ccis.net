import React from 'react';

export default function HeroBodyText({ children, className }) {
  return (
    <div
      className={`text-2xl text-center text-rich-black leading-[180%] tracking-wide ${className}`}
    >
      <p>{children}</p>
    </div>
  );
}
