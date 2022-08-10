import React from 'react';
import Image from './Image';

export default function NextPageButton({ onClick, x, y }) {
  return (
    <Image
      onClick={onClick}
      onTap={onClick}
      imagePath='/anniversary/2022/nextPage.svg'
      width={100}
      height={94.75}
      x={x}
      y={y}
    />
  );
}
