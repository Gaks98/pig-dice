# Pig Dice
This is a Pig dice web game that challenges users to play again each other by rolling a dice. Created on the 30th March 2019 By Yvonne Gakii Gitonga.

# Description
This is a Pig dice web game that challenges users to play again each other by rolling a dice.The game has 2 player, playing in rounds.
In each turn, the player rolls a dice as many times as he wishes. Each result gets added to his ROUND score.BUT, if a player rolls a 1, all his scores in that round get erased. After that, its the next player's turn.The player can choose to "HOLD", which means that the round's score gets added to his previous score. After that, its the other players turn
The first player to reach 100 points on his total score, wins

# Setup/Installation Requirements
No set up requirements or Installation needed to view this website. The site is fully run on its own originally set codes and links and does not depend on any other code to function. In case you want to use the codes you can clone it here: https://github.com/Gaks98/pig-dice.git.

# Known Bugs
The website is not suitable for phones less than 200px of width cause that will be extra small. Not that they will not be able to view it but because it may not look as stunning as on other devices.

# Technologies Used
1. CSS
2. html
3. jQuery
4. JavaScript
5. Bootstrap
6. sweet alerts

# Program Behaviour
##BDD

| Behaviour       | Input           | Output          |
| :-------------: | :-------------: | :-------------: |
| roll 1          | roll === 1      | Next player     |
|                 |                 |                 |
| roll 2-6        | roll != 1       |points add up    |
|                 |                 |                 |
| first to reach  | roll >= 100     |     Winner      |
|  100            |                 |                 |
| hold            | next player     | next player     |
|                 |                 | and points      |
|                 |                 |   add up        |
|                 |                 |                 |

## How to run
1. Make sure to input all fields in the input field. Take test before deadline of the countdown.
2. After every action remember to click either the submit, okay or done button for you to see the output.

# Live Site
View my live site here:https://gaks98.github.io/pig-dice/

# Support and contact details
In case you run into some issues will trying to use this site feel free to reach me at yvonnegax98@gmail.com

# License
MIT License

Copyright (c) [2019] [Yvonne Gakii Gitonga]
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
