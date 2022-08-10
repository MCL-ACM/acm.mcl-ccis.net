import React from 'react';
import { Group, Text } from 'react-konva';
import Image from './Image';

export default function CirclyText({ text, fontSize, x, y }) {
  return (
    <Group x={x} y={y}>
      <Text
        text={text}
        fontSize={fontSize}
        fill='white'
        fontFamily='Reenie Beanie'
        x={14}
      />
      <Image imagePath='/anniversary/2022/squiggly-circle.svg' y={-16} />
    </Group>
  );
}
