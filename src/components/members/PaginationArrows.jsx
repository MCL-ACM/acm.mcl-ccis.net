import React from 'react';

export function LeftArrow({ clickEvent, className }) {
  return (
    <svg
      width='43'
      height='43'
      viewBox='0 0 58 58'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      onClick={clickEvent}
      className={className}
    >
      <circle cx='29' cy='29' r='29' fill='#212840' />
      <path
        d='M27.6733 39L18.7642 30.0909L27.6733 21.1818L29.2045 22.6932L22.9006 28.9972L39.2273 28.9972V31.1847L22.9006 31.1847L29.2045 37.4688L27.6733 39Z'
        fill='white'
      />
    </svg>
  );
}

export function RightArrow({ clickEvent, className }) {
  return (
    <svg
      width='43'
      height='43'
      viewBox='0 0 58 58'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      onClick={clickEvent}
      className={className}
    >
      <circle
        cx='29'
        cy='29'
        r='29'
        transform='rotate(-180 29 29)'
        fill='#212840'
      />
      <path
        d='M30.3267 19L39.2358 27.9091L30.3267 36.8182L28.7955 35.3068L35.0994 29.0028L18.7727 29.0028L18.7727 26.8153L35.0994 26.8153L28.7955 20.5312L30.3267 19Z'
        fill='white'
      />
    </svg>
  );
}
