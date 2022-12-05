import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

export default function GuessNumber() {
  const content = `\
For the third activity, you'll be creating a game. 

The player will have 3 lives at the start of this game. The game will generate a random number and the player will have to guess what that number is. If their guess is incorrect, they will lose 1 life. Once that life becomes 0, the player will lose. 

But of course, there will be hints. If their guess is greater than the actual number, the game must print out "Lower!". And if their guess is lower, the game will print out "Higher!". 

If the player guessed the correct number, the game would print out "You Win!", but if the player loses, the game will print out "You Lose. The correct number is {number}".

See the sample output and follow the instructions below. No visual demonstration this time!

### Sample Output

![sample output](activity3.gif)

### Instructions

**Step 1.** Create a variable for the player’s lives and set the initial value to 3.

**Step 2.** Create a variable for the random number, and assign a random integer from 1 to 10.
Hint: Use the random integer block under the Math category.

**Step 3.** Use a “repeat while” block to let the player guess the number while their life is not yet 0.
Hint: You can find the “repeat while” block under the Loops category.

**Step 4.** Inside the “repeat while” block, create a variable for the player’s guess, then assign to it a prompt for a number with the message “Guess the number”

**Step 5.** Still inside the “repeat while” block, use an if - else if - else block that will check whether the player’s guess is lower than the random number, is higher than the random number or is the correct number.

**Step 6.** If the player’s guess is lower than the random number, print out “Higher!”, then subtract 1 life from the player.

**Step 7.** If the player’s guess is higher than the random number, print out “Lower!”, then subtract 1 life from the player as well.

**Step 8.** Else, if the player’s guess is neither lower nor higher, then it is correct and you should break out of the loop.

**Step 9.** After the “repeat while” block, use another if - else block to check if the player’s life is still greater than 0.

**Step 10.** If the life is greater than 0, print out "You Win!". If not, print out "You Lose. The correct number is {number}"

**Step 11.** Run the program, and let your friends play your game!
`;
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
      {content}
    </ReactMarkdown>
  );
}
