const cards = [1,2,3,4,5,6,7,8,9,10,'J','Q','K','A'];
const cardColor = ['♦','♥','♣','♠'];
const deck = [];

for(let i = 0; i < 13; i++){
    for( let j = 0; j < 4; j++) {
        deck.push(cards[i] + cardColor[j]);
    }
}
console.log(deck)
let playerCards = [];
let dealerCards = [];
let playerResult = [];
let dealerResult =[];
playAgain = false;
let value;
// button play again
document.querySelector('.playAgain')
    .addEventListener('click', playGame);



// //---------let playAgain = false-------------------

// while (playAgain !== true) {
    randomCards();
    function randomCards(random) {
        
        let rdmCards = Math.floor(Math.random() * deck.length);
        
        return deck[rdmCards];

    }
    console.log(randomCards(deck))
    
    // generating random numbers for player and dealer
    // and starting the game
    function playGame() {

        playerCards = [randomCards(deck), randomCards(deck)];
        dealerCards = [randomCards(deck), randomCards(deck)];
        console.log(playerCards)

    }

    

    //---------------- result and EventListener -----------------

    document.querySelector('.check')
        .addEventListener('click', result);

    function result() {
        if (getValue(dealerCards) <= '21' &&
            getValue(dealerCards) >= getValue(playerCards)) {
            //if this condition become true game will stop
            //and dealer will win
            playAgain = false;
            console.log('dealer hand', getValue(dealerCards));
            console.log('dearler won');
        }
        else if (getValue(playerCards) <= '21' &&
            getValue(playerCards) > getValue(dealerCards)) {
            //if this condition become true game will stop
            //and dealer will win
            playAgain = false;
            console.log('player hand', getValue(playerCards));
            console.log('[player] won');
        }
        else {
            console.log('continu')
            playAgain = true;
        }
    }

handsValue();
    //------------ calculating the value of the hands --------------
    function getValue(value) {
          
        let sum = 0;
        value.forEach(function (e) {
            if(e === 'J' || e === 'Q' || e === 'K' || e === 'A'){
                sum += 10
            }
            else {
                sum += e;
            }
            
        });
        return sum;
    
    }

    function handsValue (num){
        return playerCards.flatMap(e =>{
            value += e;
        })
    }
    //------------- getting classes from html and adding eventlistener ----------
    document.querySelector('#stay')
        .addEventListener('click', btnStay)
    document.querySelector('#hit').addEventListener('click', hit);


    // -------------- Dealer turn to play --------------
    
    function btnStay() {

        console.log(dealerCards)
        //Checking the value of hands if they are under 21
        if (getValue(dealerCards) <= '21' &&
            getValue(dealerCards) >= getValue(playerCards)) {
            //if this condition become true game will stop
            //and dealer will win
            playAgain = false;
            console.log('dealer hand', getValue(dealerCards));
            console.log('dearler won');

        }  //if the dealer cards value more than 21 dealer will lose
        else if (getValue(dealerCards) > '21') {
            console.log('dealer lost', getValue(dealerCards,
                'player Won!', getValue(playerCards)))
            playAgain = false;
        }
        //if the above two condition is false dealer can get more cards 
        else {
            dealerCards.push(randomCards(cards));
            console.log('dealer hand', dealerCards);
            playAgain = true;
        }
    }


    // ---------------------- play turn to play
    
    function hit() {
        playerCards.push(randomCards(cards));
        //if players card value is above 21 player will lose 
        if (getValue(playerCards) > '21') {
            playAgain = false;
            console.log('player hand ', getValue(playerCards), 'player lost')
            
        }
        // if the player cards value is under 21, can get more cards
        else {
            
            console.log('player hand ', playerCards)
            playAgain = true;

            if (getValue(playerCards) > '21') {
                playAgain = false;
                console.log('player hand ', getValue(playerCards))
                console.log('play lost')
            }
        }

    }

    hit();
    playGame();

    // console.log('player hand: ', getValue(playerCards));
    // console.log('dealer hand: ', getValue(dealerCards));
    //console.log("player: ", playerCards, "de" , dealerCards);


result();
//console.log(playerCards);
console.log("thank you for playing")


// function showScore( card, activePlayer){
//     i(activePlayer['Score' <= 21]{

//     })
// }
