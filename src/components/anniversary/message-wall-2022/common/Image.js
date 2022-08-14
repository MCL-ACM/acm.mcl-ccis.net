import React from 'react';
import { Circle, Image as KonvaImage } from 'react-konva';
import useImage from 'use-image';
import LoadingPlaceholder from './LoadingPlaceholder';

export default function Image({
  imagePath,
  x,
  y,
  width,
  height,
  onClick,
  rotation,
  onTap,
  draggable,
  onDragEnd,
  onMouseEnter,
  onMouseLeave,
}) {
  const [img, status] = useImage(imagePath);
  return (
    <>
      {status === 'loading' && (
        <LoadingPlaceholder x={x} y={y} width={width} height={height} />
      )}
      {status === 'loaded' && (
        <KonvaImage
          rotation={rotation === null ? 0 : rotation}
          image={img}
          x={x}
          y={y}
          width={width}
          height={height}
          onClick={onClick}
          onTap={onTap}
          draggable={draggable}
          onDragEnd={onDragEnd}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      )}
    </>
  );
}
