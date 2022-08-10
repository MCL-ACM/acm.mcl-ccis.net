import React from 'react';
import { Group, Text } from 'react-konva';
import Page from './Page';
import Image from '../common/Image';
import CirclyText from '../common/CirclyText';
import ListTexts from '../common/ListTexts';

export default function TitleCanvas({ width, height }) {
  const instructions = [
    'zoom in to view messages/images clearly.',
    'pan around to explore.',
    'click the arrows to navigate pages.',
    'explore!',
  ];

  return (
    <Page color='#001F29'>
      <Group y={112}>
      <Image
          imagePath='/anniversary/2022/confetti.svg'

        />
        <Image
          imagePath='/anniversary/2022/top-right-stars.svg'
          x={240}
          y={-79}
        />
        <Text
          text='4th Founding Anniversary'
          fontSize={13}
          fill='white'
          width={width}
          height={height}
          fontFamily='Roboto'
          fontStyle='300'
          y={-28}
          x={20}
        />
        <Text
          text='MCL-ACM'
          fontSize={58}
          fill='white'
          width={width}
          height={height}
          fontFamily='Inter'
          align='center'
          letterSpacing={-3}
        />
        <Text
          text='MESSAGE WALL'
          fontSize={32}
          fill='white'
          width={width}
          height={height}
          fontFamily='Inter'
          align='center'
          letterSpacing={-0.5}
          y={72}
        />
        <Image
          imagePath='/anniversary/2022/bottom-left-stars.svg'
          x={8}
          y={74}
        />
       
      </Group>
      <Group x={8}>
        <CirclyText text='instructions!' fontSize={32} y={340} />
        <ListTexts fontSize={16} texts={instructions} x={12} y={382} />
        <Group>
          <Text
            fontFamily='Reenie Beanie'
            text='Try to zoom in here...'
            fontSize={12}
            fill='white'
            x={264}
            y={424}
            rotationDeg={30}
          />
          <Image
            imagePath='/anniversary/2022/small-arrow.svg'
            x={264}
            y={445}
          />
        </Group>

      </Group>
      <Image
        imagePath='/anniversary/2022/right-squiggly.svg'
        x={230}
        y={286}
      />
      <Image
        imagePath='/anniversary/2022/bottom-left-squiggly.svg'
        x={-52}
        y={510}
      />
    </Page>
  );
}
