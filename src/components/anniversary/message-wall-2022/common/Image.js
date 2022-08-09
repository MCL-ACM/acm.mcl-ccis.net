import React from 'react';
import { Image as KonvaImage } from 'react-konva';
import useImage from 'use-image';

export default function Image({
  imagePath,
  x,
  y,
  width,
  height,
  onClick,
  rotation,
}) {
  const [img] = useImage(imagePath);
  return (
    <KonvaImage
      rotation={rotation === null ? 0 : rotation}
      image={img}
      x={x}
      y={y}
      width={width}
      height={height}
      onClick={onClick}
    />
  );
}
