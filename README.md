# BlackJack 

This is a Blackjack game.The objective of the game is to beat the dealer, which can be done in in this oerder.
<Get 21 point with first two cards and its BLACKJACK automatic win>.
<Your cards value must be highter than the dealer cards value but less than 21 >.
<If dealer cards are highter than 21>.
<Must impotant thing you should known, the AC is always 11>.

# how this app works
In this game you must follow the red box around the buttons and whatever button is red
thats the onlly button works at that moment.
Game link https://navid107.github.io/BlackJack/

<img width="1435" alt="Screen Shot 2021-09-17 at 1 08 36 AM" src="https://user-images.githubusercontent.com/90425833/133823083-c40a801e-0ad2-422e-84cc-f1da754ed7fa.png">

1- You can shuffle or play. 

2- Player must click on hit button to receives cards <if the cards value get more 21 wont receive anymore>.

3- When player takes no more cards, player can click only on stay button.

4- now its dealers turn and dealer can receive cards and if dealer clicks on stay button,

5- The check button will activate to print the result and it saves the scores.

6- The process repeats again. 

# The instructions below describes the various methods which can be used to execute the game:

# creating the Cards and Deck 
line 2-3, adding faces and ranks in two arrays.

line 52-66 function buildMasterDeck builds the cards by using faces and raks arrays.

line 17-28 function GetNewSHuffledDeck randomize the cards.

line 30-34 saves the shuffled cards into variable to render with no error.

line 36 function renderDeckInContainer shows the faces and the ranks of cards in the page.

# Variables
line 70-100 addig variables and button. 

# Random cards
line 104-108 function randomCards makes new random cards.

# game start on line 110
funtion playGame sets the outputs desgin. 

# results
line 129-158 sets the desgin and finds the winner and saves the scores.

# the value of hands
line 161-167 calculates the value and the hands and returns them. 

# dealer Stays
line 170-179 this function is only availabe after dealer hits stay button
it sets the design and revoke the next move.

# dealer Hits
line 182-198 this function generates new cards for dealer if its need it 
set some design and and if the hands is more than 21 it wont generates nw cards and moves to stay.

# shuffle
line 201-219 this funcion shuffles the cards and sets the new design.

# Player Stay
line 222-232 playerStay function sets the design and next move.

# Player Hit
line 235-253 playerHit function can generate new cards if the hands is under 21
sets the desing.

#Based on JS, HTML, CSS

