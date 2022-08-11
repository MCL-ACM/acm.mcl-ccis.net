import React from 'react';
import { Group, Text } from 'react-konva';
import ContentDisplay from '../common/ContentDisplay';
import Page from './Page';
import { EndGalleryContent } from '../content/EndGalleryContent';
import Image from '../common/Image';

export default function EndGallery({ width, height }) {
  return (
    <Page color='#001F29'>
      <Group>
        <Image imagePath='/anniversary/2022/gallery-bg.svg' x={12} y={46} />
        <Image imagePath='/anniversary/2022/star-thing.svg' x={236} y={14} />
        <ContentDisplay contents={EndGalleryContent} />
        <Image imagePath='/anniversary/2022/bottom-arrow.svg' x={200} y={523} />
      </Group>
      <Group>
        <Text
          text='Be part of our community!'
          fontSize={32}
          fill='white'
          width={width}
          height={height}
          fontFamily='Reenie Beanie'
          fontStyle='300'
          x={28}
          y={637}
        />
        <Image imagePath='/anniversary/2022/registration-btn.svg' x={91} y={687} />
      </Group>
      <Group>
        <Text
          text='Check out our events'
          align='right'
          fontSize={32}
          fill='white'
          width={width}
          height={height}
          fontFamily='Reenie Beanie'
          fontStyle='300'
          x={-16}
          y={795}
        />
        <Image imagePath='/anniversary/2022/event-btn.svg' x={23} y={839} />
      </Group>
    </Page>
  );
}

