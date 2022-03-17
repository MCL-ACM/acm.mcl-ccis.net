import * as React from 'react';

export default function Divider({ glow, className }) {
  const styles = {
    'box-shadow': glow && '0px 0px 17px rgba(0, 216, 243, 0.7)',
  };
  return (
    <hr
      className={`sm:h-0.5 h-1 shadow-lg bg-gradient-to-tr from-standard-blue to-cerulean-crayola ${className}`}
      style={styles}
    />
  );
}
