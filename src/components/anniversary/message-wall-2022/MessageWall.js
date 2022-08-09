import React, { useState } from 'react';
import { Stage, Layer, Group } from 'react-konva';
import EndGallery from './pages/EndGallery';
import JoiningMclAcm from './pages/JoiningMclAcm';
import MostMemorableMoment from './pages/MostMemorableMoment';
import MessageToAspiringMembers from './pages/MessageToAspiringMembers';
import TitleCanvas from './pages/Splash';
import TestBed from './pages/TestBed';
import PreviousPageButton from './common/PreviousPageButton';
import NextPageButton from './common/NextPageButton';
import BackHomeButton from './common/BackHomeButton';

export default function MessageWall() {
  const canvasWidth = 360;
  const canvasHeight = 640;
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const pages = [
    <TestBed />,
    <TitleCanvas width={canvasWidth} height={canvasHeight} />,
    <MostMemorableMoment width={canvasWidth} height={canvasHeight} />,
    <JoiningMclAcm width={canvasWidth} height={canvasHeight} />,
    <MessageToAspiringMembers width={canvasWidth} height={canvasHeight} />,
    <EndGallery width={canvasWidth} height={canvasHeight} />,
  ];

  const isFirstPage = currentPageIndex === 0;
  const hasPreviousPage = currentPageIndex - 1 >= 0;
  const hasNextPage = currentPageIndex + 1 < pages.length;

  function goBackHome() {
    setCurrentPageIndex(0);
  }

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
          <Group>{pages[currentPageIndex]}</Group>
          <Group>
            {isFirstPage && (
              <BackHomeButton onClick={() => goBackHome()} x={80} y={80} />
            )}
            {hasPreviousPage && (
              <PreviousPageButton
                onClick={() => previousPage()}
                x={10}
                y={canvasHeight - 100 - 10}
              />
            )}
            {hasNextPage && (
              <NextPageButton
                onClick={() => nextPage()}
                x={canvasWidth - 100 - 10}
                y={canvasHeight - 100 - 10}
              />
            )}
          </Group>
        </Layer>
      </Stage>
    </div>
  );
}
