import React from "react";
import ReactMarkdown from "react-markdown";

export default function GuessNumber() {
  const content = `\
For the third activity, you'll be creating a game. You'll have three \
lives in this game. Also, this program gets a number as an input and this \
number will only be from 1-10. Let your friend input that number and \
you'll have to guess what is that number. If the guessed number is not the \
number your friend inputted, you'll lose 1 life. Once that life becomes 0, \
you'll lose. But of course there are always hints if you didn't guess the \
correct number. If the guessed number is greater than the actual number, \
you must print out "Lower!". And if the guessed number is lower, print out \
"Higher!". If you guessed the correct number, print out "You Win!" and if \
you lose, print out "You Lose. The correct number is {number}";.
`;
  return <ReactMarkdown>{content}</ReactMarkdown>;
}
