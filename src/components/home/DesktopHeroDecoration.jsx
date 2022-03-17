import * as React from 'react';

export default function DesktopHeroDecoration({ className, style }) {
  return (
    <svg
      className={className}
      style={style}
      viewBox='0 0 1440 561'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M-64 434C-64 434 1363.5 0 1385.5 0C1407.5 0 1465 47.5 1465 47.5L1678.5 396.5L1090 560.5L-64 434Z'
        fill='url(#paint0_linear_1252_2353)'
        fillOpacity='0.14'
      />
      <defs>
        <linearGradient
          id='paint0_linear_1252_2353'
          x1='1376'
          y1='32.0003'
          x2='1129.02'
          y2='578.148'
          gradientUnits='userSpaceOnUse'
        >
          <stop offset='0.317708' stopColor='#00A8DB' />
          <stop offset='1' stopColor='#0070EE' />
        </linearGradient>
      </defs>
    </svg>
  );
}
