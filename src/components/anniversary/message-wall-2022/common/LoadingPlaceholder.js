import Konva from 'konva';
import React, { useEffect, useRef } from 'react';
import { Arc } from 'react-konva';

export default function LoadingPlaceholder({ x, y, width, height }) {
  const radius = (Math.min(width, height) / 2) * 0.9;
  const arcRef = useRef(null);

  const animateArc = () => {
    const arc = arcRef.current;
    const anim = new Konva.Animation((frame) => {
      const { timeDiff } = frame;
      const currentRotation = arc.rotation();
      const rotationAmount = 0.3;
      const newRotation = currentRotation + rotationAmount * timeDiff;
      arc.rotation(newRotation % 360);
    }, arc.getLayer());

    anim.start();
  };

  useEffect(() => {
    animateArc();
  }, []);

  return (
    <>
      <Arc
        x={x + width / 2}
        y={y + height / 2}
        innerRadius={radius * 0.9}
        outerRadius={radius}
        fill='white'
        angle={60}
        rotation={Math.random() * 360}
        ref={arcRef}
      />
      <Arc
        x={x + width / 2}
        y={y + height / 2}
        innerRadius={radius * 0.9}
        outerRadius={radius}
        fill='white'
        angle={360}
        opacity={0.5}
      />
    </>
  );
}
