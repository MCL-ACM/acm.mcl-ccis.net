import React, { useState, useRef } from 'react';

import { Rect, Group } from 'react-konva';
import dimensions from '../dimensions';

export default function Page({ children, color }) {
  const initialScale = dimensions.pageWidth() / dimensions.canvasWidth();
  const [scale, setScale] = useState(initialScale);

  const [stagePosition, setStagePosition] = useState({
    x: 0,
    y: 0,
  });
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
      centeredScaling
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

        if (newScale >= 1) {
          setScale(newScale);

          const newPos = {
            x: center.x - relatedTo.x * newScale,
            y: center.y - relatedTo.y * newScale,
          };

          setStagePosition(newPos);
        }
      }}
    >
      <Rect
        width={window.innerWidth * 3}
        height={window.innerHeight * 3}
        fill={color}
        x={-window.innerWidth}
        y={-window.innerHeight}
      />
      {children}
    </Group>
  );
}
