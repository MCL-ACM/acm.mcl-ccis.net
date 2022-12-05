import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

export default function HelloProgramming() {
  const content = `\
A year has passed and as a tradition, MCL ACM is now conducting its yearly event called "Hour of Code" and wants to know their participants.

This is just a warm up so as your first activity, just a simple greeting will suffice. Come up with a program that accepts your name as an input, puts it in a variable and prints out "Welcome to Hour of Code 2022, {name}"

See the sample output and follow the instructions below.

### Sample Output
![sample output](/hoc2022/activity1.gif)

### Instructions
**Step 1.** Create a variable for the participant’s name.

![step 1](/hoc2022/activity1_step1.gif)

**Step 2.** Create a prompt to ask for the participant’s name.

![step 2](/hoc2022/activity1_step2.gif)

**Step 3.** Create a print statement to welcome the participant.

![step 3](/hoc2022/activity1_step3.gif)

**Step 4.** Run the program.


`;
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
      {content}
    </ReactMarkdown>
  );
}
