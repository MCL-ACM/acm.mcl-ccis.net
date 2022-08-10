import React from 'react';
import Image from './Image';

export default function PreviousPageButton({ onClick, x, y }) {
  return (
    <Image
      onClick={onClick}
      onTap={onClick}
      imagePath='/anniversary/2022/previousPage.svg'
      width={100}
      height={94.75}
      x={x}
      y={y}
    />
  );
}
