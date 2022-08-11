import { Text } from 'react-konva';
import React from 'react';
import contentTypes from '../lib/ContentTypes';
import Image from './Image';

export default function ContentDisplay({ contents }) {
  return contents.map((content) => {
    switch (content.contentType) {
      case contentTypes.TextContentType:
        return (
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
  });
}
