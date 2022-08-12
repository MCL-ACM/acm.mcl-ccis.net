import React from 'react';
import ContentDisplay from '../common/ContentDisplay';
import DesktopJoiningMclAcmContent from '../content/DesktopJoiningMclAcmContent';
import JoiningMclAcmContent from '../content/JoiningMclAcmContent';
import Page from './Page';

export default function JoiningMclAcm({ isPortrait }) {
  return (
    <Page color='#004D66'>
      <ContentDisplay
        contents={
          isPortrait ? JoiningMclAcmContent : DesktopJoiningMclAcmContent
        }
      />
    </Page>
  );
}
