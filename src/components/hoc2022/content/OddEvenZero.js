import React from "react";
import ReactMarkdown from "react-markdown";

export default function OddEvenZero() {
  const content = `\
In this activity, initially, you'll have 50 points. The program will \
randomly generate a number from 0-10 and you will have to guess whether it \
is Odd, Even, or Zero. if you guessed incorrectly, your points will be \
deducted by 10. if you guessed Odd or Even correctly, your points will \
increase by 10. For Zero, it will increase by 30. Now, the game's over if \
your points reaches to zero.



*note: Let your creativity run wild. Don't just stick to the statements, add your flavor. By doing so, maybe you'll get picked to be worthy of having a price.
`;
  return <ReactMarkdown>{content}</ReactMarkdown>;
}
