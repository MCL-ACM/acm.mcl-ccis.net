import React from 'react';
import { Text } from 'react-konva';
import Page from './Page';

export default function JoiningMclAcm({ width, height }) {
  return (
    <Page color='#004D66'>
      <Text
        text='How did joining MCL-ACM help you?'
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
