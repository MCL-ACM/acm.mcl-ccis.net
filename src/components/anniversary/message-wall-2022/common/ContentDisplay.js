import { Text } from 'react-konva';
import React from 'react';
import contentTypes from '../lib/ContentTypes';
import Image from './Image';
import QuestionHeader from './QuestionHeader';

export default function ContentDisplay({ contents }) {
  return contents.map((content) => (
    <>
      {content.contentType === contentTypes.TextContentType && (
        <Text
          x={content.x}
          y={content.y}
          fontFamily={content.fontFamily}
          fontSize={content.fontSize}
          text={content.text}
          width={content.width}
          height={content.height + 20}
          fill='white'
          lineHeight={content.lineHeight}
        />
      )}
      {content.contentType === contentTypes.ImageContentType && (
        <Image
          x={content.x}
          y={content.y}
          width={content.width}
          height={content.height}
          imagePath={content.image}
        />
      )}
      {content.contentType === contentTypes.QuestionHeaderContentType && (
        <QuestionHeader
          text={content.text}
          x={content.x}
          y={content.y}
          rotation={content.rotation}
        />
      )}
    </>
  ));
}
