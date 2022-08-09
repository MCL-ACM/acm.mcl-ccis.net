import React, { useState } from 'react';
import { Stage, Layer, Circle, Group } from 'react-konva';
import EndGallery from './pages/EndGallery';
import JoiningMclAcm from './pages/JoiningMclAcm';
import MostMemorableMoment from './pages/MostMemorableMoment';
import MessageToAspiringMembers from './pages/MessageToAspiringMembers';
import TitleCanvas from './pages/Splash';
import TestBed from './pages/TestBed';
import PreviousPageButton from './common/PreviousPageButton';
import NextPageButton from './common/NextPageButton';

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

  function nextPage() {
    if (!hasNextPage) {
      return;
    }
    setCurrentPageIndex(currentPageIndex + 1);
  }

  function previousPage() {
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
              <PreviousPageButton
                onClick={() => previousPage()}
                x={100 + 40}
                y={canvasHeight - 100 - 40}
              />
            )}
            {hasNextPage && (
              <NextPageButton
                onClick={() => nextPage()}
                x={canvasWidth - 100 - 40}
                y={canvasHeight - 100 - 40}
              />
            )}
          </Group>
        </Layer>
      </Stage>
    </div>
  );
}
