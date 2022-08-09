import React from 'react';
import { Group, Text } from 'react-konva';
import Image from './Image';

export default function QuestionHeader({ text, x, y, rotation }) {
  return (
    <Group rotation={rotation === null ? 0 : rotation} x={x} y={y}>
      <Image
        imagePath='/anniversary/2022/washiTape.svg'
        width={350}
        height={65}
      />
      <Text
        text={text}
        fontSize={16}
        width={350}
        height={65}
        fill='#003D52'
        align='center'
        verticalAlign='middle'
        fontFamily='Rammetto One'
      />
    </Group>
  );
}
