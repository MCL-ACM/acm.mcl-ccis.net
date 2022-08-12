import React, { useState, useRef, useEffect } from 'react';
import Konva from 'konva';
import { Rect, Group } from 'react-konva';
import dimensions from '../dimensions';

export default function Page({ children, color }) {
  const initialScale = dimensions.pageWidth() / dimensions.canvasWidth();
  const maxZoomLevel = 4;
  const [zoomLevel, setZoomLevel] = useState(1);

  const canvasHeight = window.innerHeight;
  const canvasWidth = window.innerWidth;
  const groupRef = useRef(null);

  useEffect(() => {
    groupRef.current.scale(initialScale);
  }, []);
  return (
    <Group
      width={canvasWidth}
      height={canvasHeight}
      draggable
      ref={groupRef}
      onTap={(e) => {
        const group = groupRef.current;

        const newZoomLevel = zoomLevel + 1 > maxZoomLevel ? 1 : zoomLevel + 1;
        const newScale = initialScale * newZoomLevel;
        const { x: selectedX, y: selectedY } =
          groupRef.current.getRelativePointerPosition();
        const offsetX = canvasWidth / 2;
        const offsetY = canvasHeight / 2;

        const newPosition = {
          x: -(selectedX * newScale) + offsetX,
          y: -(selectedY * newScale) + offsetY,
        };

        group.to({
          x: newPosition.x,
          y: newPosition.y,
          scaleX: newScale,
          scaleY: newScale,
          duration: 0.1,
        });
        setZoomLevel(newZoomLevel);
      }}
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
          e.target.scaleX(newScale);
          e.target.scaleY(newScale);

          const newPos = {
            x: center.x - relatedTo.x * newScale,
            y: center.y - relatedTo.y * newScale,
          };

          e.target.position(newPos);
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
