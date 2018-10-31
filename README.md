# rybread9.github.io

![trouble](https://user-images.githubusercontent.com/42280967/46184329-fa460100-c289-11e8-9653-5c53aea0ad39.png)

# Trouble

### About the App:
Trouble is a two-player digital boardgame in which players roll dice to move their tokens along a path. The goal of the game is to be the first player to place their token into the "finish".

[Play Trouble here!](https://rybread9.github.io/trouble/trouble_app/)

### Trouble Game Rules
#### Overview
Trouble is a simple game for 2 players. According to Trouble game rules, the goal of the game is to be the first player to your piece from “Home” to “Finish.”
#### How to Play
Click roll the dice to determine how many spaces to move your token. Tokens move around the board based on the number rolled on your turn.
Pieces move around the board clockwise (left). You must count each space you move, whether it is empty or full. If you are able to land on a space that has an opponent’s piece, your opponent’s piece is sent back home. This includes an opponent’s piece being on “Start” when you roll a 6 and are able to move a piece from “Home” to “Start.”
#### Winning the Game
Per Trouble game rules, to win the game, you must be the first player to move your piece into the Finish. Pieces do not move around the board a second time.


### Technologies Used
This app was created using:
* HTML
* CSS
* JavaScript
* jQuery


### Challenges Overcome
* Only allowing click events on pathway divs. Solved problem by:
  - assigning a custom attribute called "path" and giving each pathway div a value (0-28).
* Toggle bar switching in unison with player turn. Solved problem by: 
  - applying a function that, when called, removes and adds an attribute of "checked" and "unchecked".
* Sending a token back to Home when opponent lands on it. Solved problem by: 
  - creating a sendHome function which checks for a class name. If the calss name is present, the opponents token is removed    and appended to the home box.
* Only allowing player to move the amount of spaces rolled by the dice
  - creating a function that finds the "newPathValue" using the current position of the token and the amount rolled on the dice.


### Future Updates to Improve App

* Ability to change turn by clicking toggle bar
