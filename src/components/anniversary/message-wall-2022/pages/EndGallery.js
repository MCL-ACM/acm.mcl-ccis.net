import React from 'react';
import ContentDisplay from '../common/ContentDisplay';
import Page from './Page';
import EndGalleryContent from '../content/EndGalleryContent';
import DesktopEndGalleryContent from '../content/DesktopEndGalleryContent';

export default function EndGallery({ isPortrait }) {
  return (
    <Page color='#001F29'>
      <ContentDisplay
        contents={isPortrait ? EndGalleryContent : DesktopEndGalleryContent}
      />
    </Page>
  );
}
