import React from 'react';

import Page from './Page';
import ContentDisplay from '../common/ContentDisplay';
import MostMemorableMomentContent from '../content/MostMemorableMomentContent';
import DesktopMostMemorableMomentContent from '../content/DesktopMostMemorableMomentContent';

export default function MostMemorableMoment({ isPortrait }) {
  return (
    <Page color='#003D52'>
      <ContentDisplay
        contents={
          isPortrait
            ? MostMemorableMomentContent
            : DesktopMostMemorableMomentContent
        }
      />
    </Page>
  );
}
