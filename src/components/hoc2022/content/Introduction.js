import React from "react";
import ReactMarkdown from "react-markdown";

export default function Introduction() {
  const content = `\
### Welcome to Hour of Code 2022

For this activity, we have perpared a series of programming problems that you must accomplish in Google Blockly. \
These activities must be solved one after another. If you get stuck, don't fret, . \

Before you continue, here are some resources to help you along the way

[Google Blockly](https://blockly-demo.appspot.com/static/demos/code/index.html)

[Lecture Slides](https://blockly-demo.appspot.com/static/demos/code/index.html)
`;
  return <ReactMarkdown>{content}</ReactMarkdown>;
}
