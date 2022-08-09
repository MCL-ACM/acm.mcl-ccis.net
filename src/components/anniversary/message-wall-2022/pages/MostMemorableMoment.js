import React from 'react';
import QuestionHeader from '../common/QuestionHeader';
import Page from './Page';

export default function MostMemorableMoment({ width, height }) {
  return (
    <Page color='#003D52'>
      <QuestionHeader
        text="What's your most memorable moment in MCL-ACM?"
        x={width / 2 - 350 / 2}
        y={height / 2 - 65 / 2}
        rotation={1.86}
      />
    </Page>
  );
}
