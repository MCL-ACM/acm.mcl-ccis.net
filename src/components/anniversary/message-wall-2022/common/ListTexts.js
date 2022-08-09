import React from 'react';
import { Group, Text } from 'react-konva';

export default function ListTexts({ fontSize, x, y, texts }) {
  return (
    <Group x={x} y={y}>
      {texts.map((listText, index) => (
        <Text
          text={index + 1 + '.) ' + listText}
          fontSize={fontSize}
          fill='white'
          fontFamily='Reenie Beanie'
          y={index * (fontSize + 4)}
        />
      ))}
    </Group>
  );
}
