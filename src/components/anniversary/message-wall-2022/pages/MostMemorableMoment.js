import React, { useEffect } from 'react';
import { Text, Group, Rect } from 'react-konva';

import QuestionHeader from '../common/QuestionHeader';
import Page from './Page';
import {
  mostMemorableMomentContent,
  contentTypes,
} from '../lib/MessageWallContent';
import Image from '../common/Image';

export default function MostMemorableMoment({ width, height }) {
  return (
    <Page color='#003D52'>
      <QuestionHeader
        text="What's your most memorable moment in MCL-ACM?"
        x={19}
        y={292.47}
        rotation={-1.91}
      />

      {mostMemorableMomentContent.map((content) => {
        switch (content.contentType) {
          case contentTypes.TextContentType:
            return (
              <Text
                x={content.x}
                y={content.y}
                fontFamily={content.fontFamily}
                fontSize={content.fontSize}
                text={content.text}
                width={content.width - 2}
                height={content.height + 20}
                fill='white'
                lineHeight={content.lineHeight}
              />
            );
          case contentTypes.ImageContentType:
            return (
              <Image
                x={content.x}
                y={content.y}
                width={content.width}
                height={content.height}
                imagePath={content.image}
              />
            );
          default:
            return null;
        }
      })}
    </Page>
  );
}
