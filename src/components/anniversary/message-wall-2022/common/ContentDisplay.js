import { Group, Text } from 'react-konva';
import React from 'react';
import contentTypes from '../lib/ContentTypes';
import Image from './Image';
import QuestionHeader from './QuestionHeader';

export default function ContentDisplay({ contents }) {
  const renderContent = (content) => (
    <>
      {content.contentType === contentTypes.GroupContentType && (
        <Group
          x={content.x}
          y={content.y}
          width={content.width}
          height={content.height}
          scaleX={content.scale}
          scaleY={content.scale}
        >
          {content.children.map((child) => renderContent(child))}
        </Group>
      )}
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
          align={content.align}
          fontStyle={content.fontStyle}
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
  );
  return contents.map((content) => renderContent(content));
}
