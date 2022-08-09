import React from 'react';
import { Text } from 'react-konva';
import Page from './Page';

export default function MostMemorableMoment({ width, height }) {
  return (
    <Page color='#003D52'>
      <Text
        text="What's your most memorable moment in MCL-ACM?"
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
