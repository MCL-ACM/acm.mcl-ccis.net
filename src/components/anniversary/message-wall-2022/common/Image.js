import React from 'react';
import { Image as KonvaImage } from 'react-konva';
import useImage from 'use-image';

export default function Image({ imagePath, x, y, width, height, onClick }) {
  const [img] = useImage(imagePath);
  return (
    <KonvaImage
      image={img}
      x={x}
      y={y}
      width={width}
      height={height}
      onClick={onClick}
    />
  );
}
