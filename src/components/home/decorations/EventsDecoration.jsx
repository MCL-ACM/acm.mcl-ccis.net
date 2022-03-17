import * as React from 'react';

export default function EventsDecoration({ className, style }) {
  return (
    <svg
      className={className}
      style={style}
      viewBox='0 0 375 607'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M0 0L375 170.851V565.535C375 565.535 86 607 73.5 607C61 607 0 565.535 0 565.535V0Z'
        fill='url(#paint0_linear_683_691)'
      />
      <defs>
        <linearGradient
          id='paint0_linear_683_691'
          x1='93.5'
          y1='544.158'
          x2='154.085'
          y2='-5.55811'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#00A8DB' />
          <stop offset='1' stopColor='#0070EE' />
        </linearGradient>
      </defs>
    </svg>
  );
}
