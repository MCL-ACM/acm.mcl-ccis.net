import React from 'react';
import QuestionHeader from '../common/QuestionHeader';
import Page from './Page';

export default function MessageToAspiringMembers() {
  return (
    <Page color='#005C7A'>
      <QuestionHeader
        text='Do you have a message for aspiring members of MCL-ACM?'
        x={10}
        y={10}
      />
    </Page>
  );
}
