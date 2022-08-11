import React from 'react';
import { Text } from 'react-konva';
import ContentDisplay from '../common/ContentDisplay';
import Page from './Page';
import EndGalleryContent from '../content/EndGalleryContent';

export default function EndGallery({ width, height }) {
  return (
    <Page color='#001F29'>
      <ContentDisplay contents={EndGalleryContent} />
    </Page>
  );
}
