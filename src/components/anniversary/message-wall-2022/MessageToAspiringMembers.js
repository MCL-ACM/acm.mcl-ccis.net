import React from 'react';
import { Text } from 'react-konva';
import Page from './Page';

export default function MessageToAspiringMembers({ width, height }) {
  return (
    <Page color='#005C7A'>
      <Text
        text='Do you have a message for aspiring members of MCL-ACM?'
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
