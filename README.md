# Quiz Board
This is a Quiz board website that asks users JavaScript questions, and gives them a certain message regarding the action they have taken while going through the website. Created on the 30th March 2019 By Yvonne Gakii Gitonga.

# Description
Quiz Board is a web application that allows anyone to users to first fill in their credentials before accessing the JavaScript questions. The website has a count down that is set to show the dead line of the day and time the test trial will end. Before access to the test the user MUST fill both their names and email, failure to adhere to this leads to an error pop up message that alerts them on what they have done wrong. Else if they fill all the required input spaces they get a welcome pop up message that welcomes them and sends them to the next page which is the quiz page on clicking okay on the pop-up.

# Setup/Installation Requirements
No set up requirements or Installation needed to view this website. The site is fully run on its own originally set codes and links and does not depend on any other code to function. In case you want to use the codes you can clone it here: https://github.com/Gaks98/quiz-board.git.

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
| 5 correct       | score === 100   | Great job!      |
|                 |                 |                 |
| 4 correct       | score >= 80     |  aim higher     |
|                 |       &&        |                 |
|                 | score < 100     |                 |
|                 |                 |                 |
| 3 correct       | score >= 60     | fairly done     |
|                 |      &&         |                 |
|                 | score < 80      |                 |
|                 |                 |                 |
| 2 correct       | score >= 40     |  poorly done    |
|                 |      &&         |                 |
|                 | score < 60      |                 |
|                 |                 |                 |
| 1 or 0 correct  | score < 40      | Get serious     |
|                 |                 |                 |

## How to run
1. Make sure to input all fields in the login form. Take test before deadline of the countdown.
2. After every action remember to click either the submit, okay or done button for you to see the output.

# Live Site
View my live site here:https://gaks98.github.io/quiz-board/

# Support and contact details
In case you run into some issues will trying to use this site feel free to reach me at yvonnegax98@gmail.com

# License
MIT License

Copyright (c) [2019] [Yvonne Gakii Gitonga]
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
