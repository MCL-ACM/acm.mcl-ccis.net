import React from 'react';
import { Circle } from 'react-konva';

export default function PreviousPageButton({ onClick, x, y }) {
  return (
    <Circle onClick={onClick} width={80} height={80} x={x} y={y} fill='white' />
  );
}
