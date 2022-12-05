import React from 'react';
import ReactMarkdown from 'react-markdown';

export default function Introduction() {
  const content = `\
## Welcome to Hour of Code 2022

In this event, you will be introduced to the world of Computing. Questions like “What is Coding?” “How does code actually works?” will get answered as we get along in this event. With an hour to spare and brilliant minds to mend, MCL-ACM will teach the introductory part of Computer Science. Are you ready? Let’s Go!

### What will you do:
For this activity, we have perpared a series of programming problems that you must accomplish in Google Blockly. These activities must be solved one after another. If you get stuck or if you need any assistance, please call the attention of your facilitator. \
For the first two activities, you will be given step by step instructions on how to accomplish the activity. However, in the fourth activity, you will only be given hints intead of instructions.

Before you continue, here are some resources to help you along the way

[Google Blockly](https://blockly-demo.appspot.com/static/demos/code/index.html)

[Lecture Slides](https://blockly-demo.appspot.com/static/demos/code/index.html)


### Learning Outcomes:
 1. To demystify Computer Science, and how does code actually work
 2. To teach and help students basic programming using Blockly
 3. Provide Learning materials for the Students to work and engage with
 4. To Ignite the passion of the students when it comes to technology.
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
