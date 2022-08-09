import React from 'react';
import { Text } from 'react-konva';
import Page from './Page';

export default function TitleCanvas({ width, height }) {
  return (
    <Page color='#001F29'>
      <Text
        text='MCL-ACM MESSAGE WALL'
        fontSize={50}
        fill='white'
        width={width}
        height={height}
        align='center'
        fontFamily='Kavivanar'
        verticalAlign='middle'
      />
    </Page>
  );
}
