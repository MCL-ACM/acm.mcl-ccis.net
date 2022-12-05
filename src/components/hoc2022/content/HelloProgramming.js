import React from "react";
import ReactMarkdown from "react-markdown";

export default function HelloProgramming() {
  const content = `\
A year has passed and as a tradition, MCL ACM is now conducting its yearly \
event called "Hour of Code" and wants to know their participants.This is \
just a warm up so as your first activity, just a simple greeting will \
suffice. Come up with a program that accepts your name as an input, puts \
it in a variable and prints out Welcome to "Hour of Code 2022, {name}!"
`;
  return <ReactMarkdown>{content}</ReactMarkdown>;
}
