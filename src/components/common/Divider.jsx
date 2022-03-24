import * as React from 'react';

export default function Divider({ className }) {
  return (
    <hr
      className={`lg:h-0.5 h-1 bg-gradient-to-tr from-standard-blue to-cerulean-crayola ${className}`}
    />
  );
}
