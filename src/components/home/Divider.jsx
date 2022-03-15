import * as React from 'react';

export default function Divider({ glow }) {
  const styles = {
    'box-shadow': glow && '0px 0px 17px rgba(0, 216, 243, 0.7)',
  };
  return (
    <div className='px-5'>
      <hr
        className='h-1 shadow-lg shadow-blue-500/90 bg-gradient-to-tr from-standard-blue to-cerulean-crayola'
        style={styles}
      />
    </div>
  );
}
