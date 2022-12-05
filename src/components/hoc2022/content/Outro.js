import React from "react";
import ReactMarkdown from "react-markdown";

export default function Outro() {
  const content = `\
### Congratulations for making it this far!

MCL-ACM would like to show you our deepest gratitude in joining Hour of Code 2022.
May your learnings from today be a guide for that path that you want to take.

This is not the end, this is just the beginning. 


Regards,

MCL-ACM
`;
  return <ReactMarkdown>{content}</ReactMarkdown>;
}
