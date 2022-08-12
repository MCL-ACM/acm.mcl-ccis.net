import React from 'react';
import Page from './Page';
import SplashPageContent from '../content/SplashPageContent';
import ContentDisplay from '../common/ContentDisplay';

export default function TitleCanvas() {
  return (
    <Page color='#001F29'>
      <ContentDisplay contents={SplashPageContent} />
    </Page>
  );
}
