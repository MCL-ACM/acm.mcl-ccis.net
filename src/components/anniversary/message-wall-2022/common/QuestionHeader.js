import React from 'react';
import { Group, Text } from 'react-konva';

export default function QuestionHeader({ text, x, y }) {
  return (
    <Group>
      <Text
        text={text}
        fontSize={16}
        x={x}
        y={y}
        fill='white'
        align='center'
        fontFamily='Rammetto One'
        verticalAlign='middle'
      />
    </Group>
  );
}
