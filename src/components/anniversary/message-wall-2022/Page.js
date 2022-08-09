import React, { useState, useRef } from 'react';
import { Rect, Group } from 'react-konva';

export default function Page({ children, color }) {
  const [scale, setScale] = useState(1);
  const [stagePosition, setStagePosition] = useState({ x: 0, y: 0 });
  const canvasHeight = window.innerHeight;
  const canvasWidth = window.innerWidth;
  const groupRef = useRef(null);

  return (
    <Group
      width={canvasWidth}
      height={canvasHeight}
      draggable
      x={stagePosition.x}
      y={stagePosition.y}
      scaleX={scale}
      scaleY={scale}
      ref={groupRef}
      onWheel={(e) => {
        e.evt.preventDefault();
        const scaleBy = 1.05;
        const group = e.currentTarget;
        const oldScale = group.scaleX();

        const center = {
          x: canvasWidth / 2,
          y: canvasHeight / 2,
        };

        const relatedTo = {
          x: (center.x - group.x()) / oldScale,
          y: (center.y - group.y()) / oldScale,
        };

        const newScale =
          e.evt.deltaY > 0 ? oldScale / scaleBy : oldScale * scaleBy;

        setScale(newScale);

        const newPos = {
          x: center.x - relatedTo.x * newScale,
          y: center.y - relatedTo.y * newScale,
        };
        setStagePosition(newPos);
      }}
    >
      <Rect
        width={canvasWidth * 3}
        height={canvasHeight * 3}
        fill={color}
        x={-canvasWidth}
        y={-canvasHeight}
      />

      {children}
    </Group>
  );
}
