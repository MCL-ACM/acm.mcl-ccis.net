import React from 'react';
import Page from './Page';
import SplashPageContent from '../content/SplashPageContent';
import DesktopSplashPageContent from '../content/DesktopSplashPageContent';

import ContentDisplay from '../common/ContentDisplay';

export default function TitleCanvas({ isPortrait }) {
  return (
    <Page color='#001F29'>
      <ContentDisplay
        contents={isPortrait ? SplashPageContent : DesktopSplashPageContent}
      />
    </Page>
  );
}
