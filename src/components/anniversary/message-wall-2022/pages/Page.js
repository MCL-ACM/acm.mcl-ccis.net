import Konva from 'konva';
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
    Konva.hitOnDragEnabled = true;
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

  function getDistance(p1, p2) {
    return Math.sqrt((p2.x - p1.x) ** 2 + (p2.y - p1.y) ** 2);
  }

  function getCenter(p1, p2) {
    return {
      x: (p1.x + p2.x) / 2,
      y: (p1.y + p2.y) / 2,
    };
  }

  const [lastCenter, setLastCenter] = useState(null);
  const [lastDist, setLastDist] = useState(0);

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
      onTouchMove={(e) => {
        const stage = groupRef.current;
        e.evt.preventDefault();
        const touch1 = e.evt.touches[0];
        const touch2 = e.evt.touches[1];

        if (touch1 && touch2) {
          // if the stage was under Konva's drag&drop
          // we need to stop it, and implement our own pan logic with two pointers
          if (stage.isDragging()) {
            stage.stopDrag();
          }

          const p1 = {
            x: touch1.clientX,
            y: touch1.clientY,
          };
          const p2 = {
            x: touch2.clientX,
            y: touch2.clientY,
          };

          if (!lastCenter) {
            setLastCenter(getCenter(p1, p2));
            return;
          }
          const newCenter = getCenter(p1, p2);

          const dist = getDistance(p1, p2);

          const newDist = lastDist || dist;
          if (!lastDist) {
            setLastDist(dist);
          }

          // local coordinates of center point
          const pointTo = {
            x: (newCenter.x - stage.x()) / stage.scaleX(),
            y: (newCenter.y - stage.y()) / stage.scaleX(),
          };

          const scale = stage.scaleX() * (dist / newDist);

          stage.scaleX(scale);
          stage.scaleY(scale);

          // calculate new position of the stage
          const dx = newCenter.x - lastCenter.x;
          const dy = newCenter.y - lastCenter.y;

          const newPos = {
            x: newCenter.x - pointTo.x * scale + dx,
            y: newCenter.y - pointTo.y * scale + dy,
          };

          stage.position(newPos);

          setLastDist(dist);
          setLastCenter(newCenter);
        }
      }}
      onTouchEnd={() => {
        setLastDist(0);
        setLastCenter(null);
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
