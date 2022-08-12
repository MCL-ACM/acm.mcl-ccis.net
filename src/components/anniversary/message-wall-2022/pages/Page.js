import React, { useState, useRef, useEffect } from 'react';
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
    groupRef.current.scaleX(initialScale);
    groupRef.current.scaleY(initialScale);
  }, []);

  const updateZoomLevel = (selectedX, selectedY) => {
    const group = groupRef.current;
    const newZoomLevel = zoomLevel + 1 > maxZoomLevel ? 1 : zoomLevel + 1;
    const newScale = initialScale * newZoomLevel;

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
  };

  const scrollZoom = (deltaY) => {
    const scaleBy = 1.05;
    const group = groupRef.current;
    const oldScale = group.scaleX();

    const center = {
      x: canvasWidth / 2,
      y: canvasHeight / 2,
    };

    const relatedTo = {
      x: (center.x - group.x()) / oldScale,
      y: (center.y - group.y()) / oldScale,
    };

    const newScale = deltaY > 0 ? oldScale / scaleBy : oldScale * scaleBy;

    if (newScale >= 1) {
      group.scaleX(newScale);
      group.scaleY(newScale);

      const newPos = {
        x: center.x - relatedTo.x * newScale,
        y: center.y - relatedTo.y * newScale,
      };

      group.position(newPos);
    }
  };

  return (
    <Group
      width={canvasWidth}
      height={canvasHeight}
      draggable
      ref={groupRef}
      onDblTap={() => {
        const { x, y } = groupRef.current.getRelativePointerPosition();
        updateZoomLevel(x, y);
      }}
      onWheel={(e) => {
        e.evt.preventDefault();
        scrollZoom(e.evt.deltaY);
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
