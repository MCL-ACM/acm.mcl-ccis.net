import React from 'react';
import { Group, Text } from 'react-konva';
import Image from './Image';

export default function BackHomeButton({ onClick, x, y }) {
  return (
    <Group onClick={onClick} x={x} y={y}>
      <Image
        imagePath='/anniversary/2022/backHome.svg'
        width={20}
        height={20}
      />
      <Text
        text='Back Home'
        x={26}
        y={3}
        fontSize={14}
        fill='white'
        fontFamily='Roboto'
      />
    </Group>
  );
}
