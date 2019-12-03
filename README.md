# Classic Arcade Game Clone Project

## Table of Contents

* [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [Dependencies](#Dependencies)

## Description
The project is arcade game.The player will win when it reach the water successfully without collision with the enemy(the bugs in this game).There are three level in this game.The number of enemies will be increased as level increased. The time was spent to finish the level in will displayed in the top of the document.The level will be displayed in the top of the document.This code will perform the game. The **Java Script** was used to perform the functionality of the game. the HTML was used along with the **CSS** and **Java Script** decorate and build the style of the game.The code developed in **Atom** software.

## Installation
-Clone or download  the zipped folder called **Arcade_Game_master** and extract the files


## Usage
- Just open the file called **index** in the explorer and enjoy playing.
- If you intend to edit the code or reuse
  - You can uses one of the text editor software such as Atom and Visual Studio Code
    - Using Atom to edit the code:
      - Download [Atom software][1]
      - Install it then open the software
      - Click file -> open folder then browse for the the folder **Arcade_Game_master** and select it
      - In the left side of the window all files inside the folder will be shown
      - Double click in the file you want to edit
      - Save changes
      - Test the changes by open the file called **index** in the explorer
     - The game folder contain a 3 **javaScript** file
         - engine.js:responsible about drawing map of the game and update the   functions and redraw the rest of images as needed(the loop of the game).
       - resources.js:it helps for loading the images usually you will not need to modify it
        - app.js: here where the logic of the game implemented.You can modify the the player and enemy update methods.These methods will be updated continuously by engine.js. You can change the images by modifying the render method.Add new Methods.


## Dependencies
- The different images showed in the game already exist in the images file.
- You can add new images by load it into the images file then pass it to  Resources.load in engine.js.

[1]:https://atom.io
