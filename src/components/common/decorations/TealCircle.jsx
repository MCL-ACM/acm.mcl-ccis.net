import React from 'react';

export default function TealCircle({ className }) {
  return (
    <svg
      width='140'
      height='141'
      viewBox='0 0 140 141'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <circle
        cx='70.2384'
        cy='70.6006'
        r='69.6699'
        transform='rotate(28.0312 70.2384 70.6006)'
        fill='url(#paint0_linear_1_100)'
      />
      <defs>
        <linearGradient
          id='paint0_linear_1_100'
          x1='70.2384'
          y1='0.930618'
          x2='70.2384'
          y2='140.27'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#88D5ED' stopOpacity='0' />
          <stop offset='1' stopColor='#156684' />
        </linearGradient>
      </defs>
    </svg>
  );
}
