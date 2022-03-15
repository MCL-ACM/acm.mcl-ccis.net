import * as React from 'react';

export default function HeroBannerDecoration({ className, style }) {
  return (
    <svg
      className={className}
      style={style}
      viewBox='0 0 375 30'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M0 30V0C0 0 77.5 29.1882 101 29C124.5 28.8118 375 0 375 0V30H0Z'
        fill='white'
      />
    </svg>
  );
}
