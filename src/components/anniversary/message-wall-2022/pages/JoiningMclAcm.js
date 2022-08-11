import React from 'react';
import ContentDisplay from '../common/ContentDisplay';
import QuestionHeader from '../common/QuestionHeader';
import JoiningMclAcmContent from '../content/JoiningMclAcmContent';
import Page from './Page';

export default function JoiningMclAcm({ width, height }) {
  return (
    <Page color='#004D66'>
      <QuestionHeader
        text='How did joining MCL-ACM help you?'
        x={width / 2 - 350 / 2}
        y={height / 2 - 65 / 2}
        rotation={-2.73}
      />

      <ContentDisplay contents={JoiningMclAcmContent} />
    </Page>
  );
}
