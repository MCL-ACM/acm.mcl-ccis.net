import React, { useState } from 'react';
import { Stage, Layer, Circle, Group } from 'react-konva';
import EndGallery from './EndGallery';
import JoiningMclAcm from './JoiningMclAcm';
import MostMemorableMoment from './MostMemorableMoment';
import MessageToAspiringMembers from './MessageToAspiringMembers';
import TitleCanvas from './Splash';
import TestBed from './TestBed';

export default function MessageWall() {
  const canvasHeight = window.innerHeight;
  const canvasWidth = window.innerWidth;
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const pages = [
    <TestBed />,
    <TitleCanvas />,
    <MostMemorableMoment />,
    <JoiningMclAcm />,
    <MessageToAspiringMembers />,
    <EndGallery />,
  ];

  const hasPreviousPage = currentPageIndex - 1 >= 0;
  const hasNextPage = currentPageIndex + 1 < pages.length;

  function nextCanvas() {
    if (!hasNextPage) {
      return;
    }
    setCurrentPageIndex(currentPageIndex + 1);
  }

  function previousCanvas() {
    if (!hasPreviousPage) {
      return;
    }
    setCurrentPageIndex(currentPageIndex - 1);
  }

  return (
    <div>
      <Stage width={canvasWidth} height={canvasHeight}>
        <Layer>
          {pages[currentPageIndex]}
          <Group>
            {hasPreviousPage && (
              <Circle
                onClick={() => previousCanvas()}
                width={80}
                height={80}
                x={100}
                y={canvasHeight - 100 - 80}
                fill='white'
              />
            )}
            {hasNextPage && (
              <Circle
                onClick={() => nextCanvas()}
                width={80}
                height={80}
                x={canvasWidth - 100 - 40}
                y={canvasHeight - 100 - 80}
                fill='white'
              />
            )}
          </Group>
        </Layer>
      </Stage>
    </div>
  );
}
