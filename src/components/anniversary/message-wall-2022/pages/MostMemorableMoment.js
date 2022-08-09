import React from 'react';
import Image from '../common/Image';
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
      <Image
        imagePath='/anniversary/2022/craftivities1.png'
        width={200}
        height={200}
        x={10}
        y={10}
      />
    </Page>
  );
}
