import React from 'react';
import ContentDisplay from '../common/ContentDisplay';
import QuestionHeader from '../common/QuestionHeader';
import { messageToAspiringmembersContent } from '../lib/MessageWallContent';
import Page from './Page';

export default function MessageToAspiringMembers({ width, height }) {
  return (
    <Page color='#005C7A'>
      <QuestionHeader
        text='Do you have a message for aspiring members of MCL-ACM?'
        x={width / 2 - 350 / 2}
        y={height / 2 - 65 / 2}
        rotation={1.44}
      />

      <ContentDisplay contents={messageToAspiringmembersContent} />
    </Page>
  );
}
