import React from "react";
import ReactMarkdown from "react-markdown";

export default function HowWell() {
  const content = `\
Now for the second activity, we will be working with conditionals. Prepare \
atleast 5 questions about yourself, like what is your favorite color, your \
birthdate, anything about you! Let your friend/s answer the questions you \
have prepared. Once your friend/s finished answering the quiz you have \
prepared, print out their scores!
`;
  return <ReactMarkdown>{content}</ReactMarkdown>;
}
