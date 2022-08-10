import React, { useEffect } from 'react';
import { Text, Group, Rect } from 'react-konva';

import QuestionHeader from '../common/QuestionHeader';
import Page from './Page';
import { mostMemorableMomentContent } from '../lib/MessageWallContent';

export default function MostMemorableMoment({ width, height }) {
  return (
    <Page color='#003D52'>
      <QuestionHeader
        text="What's your most memorable moment in MCL-ACM?"
        x={19}
        y={292.47}
        rotation={-1.91}
      />

      {mostMemorableMomentContent.map(
        ({
          text,
          fontFamily,
          fontSize,
          x,
          y,
          width: contentWidth,
          height: contentHeight,
        }) => (
          <Text
            x={x}
            y={y}
            fontFamily={fontFamily}
            fontSize={fontSize}
            text={text}
            width={contentWidth}
            height={contentHeight}
            fill='white'
          />
        ),
      )}
    </Page>
  );
}
