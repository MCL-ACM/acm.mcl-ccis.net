import React from 'react';
import { Group, Text } from 'react-konva';
import Image from './Image';

export default function BackHomeButton({ onClick, x, y }) {
  return (
    <Group
      onClick={onClick}
      onTap={onClick}
      x={x}
      y={y}
      width={120}
      height={24}
      onMouseEnter={(e) => {
        const container = e.target.getStage().container();
        container.style.cursor = 'pointer';
      }}
      onMouseLeave={(e) => {
        const container = e.target.getStage().container();
        container.style.cursor = 'default';
      }}
    >
      <Image
        imagePath='/anniversary/2022/backHome.svg'
        width={20}
        height={20}
      />
      <Text
        text='Back to Website Home'
        x={26}
        y={2}
        fontSize={18}
        fill='white'
        fontFamily='Roboto'
      />
    </Group>
  );
}
