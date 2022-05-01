# Tic Tac Toe 
A simple Tic Tac Toe game. 

**Link to project:** 

![alt tag](http://placecorgi.com/1200/650)

## How It's Made:

**Tech used:** HTML, CSS, JavaScript

I wrote the html and css first to get a suitable game board built from buttons using  display: flex. I opted to use buttons because lined up they already look like a tictactoe gameboard. 
The js uses event listeners on the buttons to know whos turn it in and what to fill in. When clicked it'll change the innertext of the button to and X or and O. I applied winning/losing logic after every click it'll checkWin(). If a win is found(3 in a row) then the game will reset and give the player a point and say who won. 


## Lessons Learned:
I learned that sometimes doing less is more. Using a simple button setup to simulate the board saved more time than building something out only to get it to look similar. I also learned that even if the win logic looks simple, there are a million and one ways to mess it up. My way is surely not the most efficient way and that can be improved upon. I thought about doing the win logic through an array but decided not to go with it. 