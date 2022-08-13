import React, { useState, useRef, useEffect } from 'react';
import { Rect, Group } from 'react-konva';
import dimensions from '../dimensions';

export default function Page({ children, color }) {
  const initialScale = dimensions.pageWidth() / dimensions.canvasWidth();
  const maxZoomLevel = 4;
  const [zoomLevel, setZoomLevel] = useState(1);

  const pageWidth = window.innerWidth;
  const pageHeight = window.innerHeight;
  const canvasWidth = dimensions.canvasWidth();
  const canvasHeight = dimensions.canvasHeight();

  const groupRef = useRef(null);

  useEffect(() => {
    groupRef.current.scaleX(initialScale);
    groupRef.current.scaleY(initialScale);
  }, []);

  const updateZoomLevel = (selectedX, selectedY) => {
    const group = groupRef.current;
    const newZoomLevel = zoomLevel + 1 > maxZoomLevel ? 1 : zoomLevel + 1;
    const newScale = initialScale * newZoomLevel;

    const offsetX = pageWidth / 2;
    const offsetY = pageHeight / 2;

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
      x: pageWidth / 2,
      y: pageHeight / 2,
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
      width={pageWidth}
      height={pageHeight}
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
      onDragMove={(e) => {
        const group = groupRef.current;
        const { x, y } = group.position();
        const scale = group.scaleX();

        const topLeft = {
          x: x / scale,
          y: y / scale,
        };

        const viewWidth = pageWidth / scale;
        const viewHeight = pageHeight / scale;

        const bottomRight = {
          x: topLeft.x - viewWidth,
          y: topLeft.y - viewHeight,
        };

        const newPosition = { x, y };

        const thresholdX = 600;
        const thresholdY = 600;

        if (
          topLeft.x > thresholdX ||
          topLeft.y > thresholdY ||
          bottomRight.x < -canvasWidth - thresholdX ||
          bottomRight.y < -canvasHeight - thresholdY
        ) {
          newPosition.x = (-canvasWidth / 2 + viewWidth / 2) * scale;
          newPosition.y = (-canvasHeight / 2 + viewHeight / 2) * scale;
        }

        e.target.position(newPosition);
      }}
    >
      <Rect width={4000} height={4000} fill={color} x={-2000} y={-2000} />
      {children}
    </Group>
  );
}
