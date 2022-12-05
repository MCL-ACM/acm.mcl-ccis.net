import React from 'react';
import ReactMarkdown from 'react-markdown';

export default function Outro() {
  const content = `\
### Congratulations for making it this far!

MCL-ACM would like to show you our deepest gratitude in joining Hour of Code 2022. May your learnings from today be a guide for that path that you want to take.

This is not the end, this is just the beginning. If you want to dive the world of computing deeper, you must know first what’s your area of interest when it comes to coding, like game dev, web dev, AI, data science and many more. After that, learn your first programming language!

We recommend Python since it’s easy to learn and is a beginner friendly language. Below are documentations all about python
* [https://www.python.org/](https://www.python.org/) - Python's Website
* [https://www.youtube.com/watch?v=kqtD5dpn9C8](https://www.youtube.com/watch?v=kqtD5dpn9C8) - A 1 hour video guide all about python
* [https://www.youtube.com/watch?v=rfscVS0vtbw](https://www.youtube.com/watch?v=rfscVS0vtbw) - A 4 hour long video that tackles python in depth.


Now, the path is clear for you and all you have to do is to walk on it.


Regards, MCL-ACM
`;
  return <ReactMarkdown>{content}</ReactMarkdown>;
}
