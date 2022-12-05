import React from 'react';
import ReactMarkdown from 'react-markdown';

export default function Introduction() {
  const content = `\
### Welcome to Hour of Code 2022

For this activity, we have perpared a series of programming problems that you must accomplish in Google Blockly. \
These activities must be solved one after another. If you get stuck or if you need any assistance, \
please call the attention of your facilitator.

For the first three activities, you will be given step by step instructions on how to accomplish the activity. \
However, in the fourth activity, you will only be given hints intead of instructions.

Before you continue, here are some resources to help you along the way

[Google Blockly](https://blockly-demo.appspot.com/static/demos/code/index.html)

[Lecture Slides](https://blockly-demo.appspot.com/static/demos/code/index.html)
`;
  return (
    <ReactMarkdown
      linkTarget='_blank'
      renderers={{
        link: (props) => (
          <a href={props.href} target='_blank' rel='noreferrer'>
            {props.children}
          </a>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
