import React from 'react';
import { Text } from 'react-konva';
import Page from './Page';

export default function TestBed() {
  const fonts = [
    'Amatic SC',
    'Amita',
    'Architects Daughter',
    'Berkshire Swash',
    'Caveat',
    'Comic Neue',
    'Covered By Your Grace',
    'Gloria Hallelujah',
    'Gochi Hand',
    'Handlee',
    'Indie Flower',
    'Inter',
    'Itim',
    'Kalam',
    'Mali',
    'Merienda',
    'Nanum Pen Script',
    'Neucha',
    'Nothing You Could Do',
    'Pangolin',
    'Patrick Hand',
    'Permanent Marker',
    'Rammetto One',
    'Reenie Beanie',
    'Rock Salt',
    'Shadows Into Light',
    'Sriracha',
  ];

  return (
    <Page color='#001F29'>
      {fonts.map((fontFamily, index) => (
        <Text
          text={fontFamily}
          fontSize={30}
          fill='white'
          align='center'
          fontFamily={fontFamily}
          y={index * 35}
        />
      ))}
    </Page>
  );
}
