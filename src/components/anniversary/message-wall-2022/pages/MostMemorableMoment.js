import React from 'react';

import QuestionHeader from '../common/QuestionHeader';
import Page from './Page';
import { mostMemorableMomentContent } from '../lib/MessageWallContent';
import ContentDisplay from '../common/ContentDisplay';

export default function MostMemorableMoment() {
  return (
    <Page color='#003D52'>
      <QuestionHeader
        text="What's your most memorable moment in MCL-ACM?"
        x={19}
        y={292.47}
        rotation={-1.91}
      />
      <ContentDisplay contents={mostMemorableMomentContent} />
    </Page>
  );
}
