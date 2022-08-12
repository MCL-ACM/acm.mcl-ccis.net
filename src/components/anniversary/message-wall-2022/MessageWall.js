import React, { useState, useEffect } from 'react';
import { Stage, Layer, Group } from 'react-konva';
import Confetti from 'react-confetti';
import EndGallery from './pages/EndGallery';
import JoiningMclAcm from './pages/JoiningMclAcm';
import MostMemorableMoment from './pages/MostMemorableMoment';
import MessageToAspiringMembers from './pages/MessageToAspiringMembers';
import TitleCanvas from './pages/Splash';
import PreviousPageButton from './common/PreviousPageButton';
import NextPageButton from './common/NextPageButton';
import BackHomeButton from './common/BackHomeButton';
import dimensions from './dimensions';

export default function MessageWall() {
  const canvasWidth = dimensions.canvasWidth();
  const canvasHeight = dimensions.canvasHeight();
  const isPortrait = dimensions.isPortrait();

  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const pages = [
    <TitleCanvas width={canvasWidth} height={canvasHeight} />,
    <MostMemorableMoment
      width={canvasWidth}
      height={canvasHeight}
      isPortrait={isPortrait}
    />,
    <JoiningMclAcm
      width={canvasWidth}
      height={canvasHeight}
      isPortrait={isPortrait}
    />,
    <MessageToAspiringMembers
      width={canvasWidth}
      height={canvasHeight}
      isPortrait={isPortrait}
    />,
    <EndGallery
      width={canvasWidth}
      height={canvasHeight}
      isPortrait={isPortrait}
    />,
  ];

  const isFirstPage = currentPageIndex === 0;
  const isLastPage = currentPageIndex === pages.length - 1;
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

  const [showConfetti, setshowConfetti] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setshowConfetti(false);
    }, 3000);
  }, []);
  const [destroyConfetti, setDestroyConfetti] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setDestroyConfetti(false);
    }, 10000);
  }, []);

  return (
    <div className='w-full h-full'>
      <div className='absolute'>
        {destroyConfetti && (
          <Confetti
            width={window.innerWidth - 1}
            height={window.innerHeight - 1}
            numberOfPieces={showConfetti ? 100 : 0}
          />
        )}
      </div>

      <Stage width={window.innerWidth} height={window.innerHeight - 1}>
        <Layer>
          <Group>{pages[currentPageIndex]}</Group>
          <Group>
            {(isFirstPage || isLastPage) && (
              <BackHomeButton onClick={() => goBackHome()} x={20} y={20} />
            )}
            {hasPreviousPage && (
              <PreviousPageButton
                onClick={() => previousPage()}
                x={dimensions.pageWidth() * 0.05}
                y={dimensions.pageHeight() * 0.8}
              />
            )}
            {hasNextPage && (
              <NextPageButton
                onClick={() => nextPage()}
                x={dimensions.pageWidth() * 0.95 - 100}
                y={dimensions.pageHeight() * 0.8}
              />
            )}
          </Group>
        </Layer>
      </Stage>
    </div>
  );
}
