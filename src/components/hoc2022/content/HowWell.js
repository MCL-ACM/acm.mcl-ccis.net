import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

export default function HowWell() {
  const content = `\
Now for the second activity, we will be working with conditionals. 

Prepare at least 3 questions about yourself, like what is your favorite color, your birthdate, anything about you! Let your friend/s answer the questions you have prepared. Once your friend/s finished answering the quiz you have prepared, print out their scores!

See the sample output and follow the instructions below. Make sure to write your own questions and the correct answers to those questions.

### Sample Output

![Sample output](activity2.gif)

### Instructions

**Step 1.** Create a variable for your friend’s score and set the initial value to 0.
![Step 1](activity2_step1.gif)

**Step 2.** Use an if - else block that will check if your friend answered correctly.
![Step 2](activity2_step2.gif)

**Step 3.** Create a prompt for your first question, then write the correct answer.
![Step 3](activity2_step3.gif)

**Step 4.** Print out a statement that says whether your friend’s answer is correct or incorrect.
![Step 4](activity2_step4.gif)

**Step 5.** Add 1 point to your friend’s score if their answer is correct.
![Step 5](activity2_step5.gif)

**Step 6.** Create more questions to challenge your friend, and make sure to write the correct answers.
![Step 6](activity2_step6.gif)

**Step 7.** After all your questions, print out your friend’s score.
![Step 7](activity2_step7.gif)

**Step 8.** Run the program, and let your friend/s answer it!
`;
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
      {content}
    </ReactMarkdown>
  );
}
