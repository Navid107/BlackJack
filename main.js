/*----- constants -----*/
const suits = ['s', 'c', 'd', 'h'];
const ranks = ['02', '03', '04', '05', '06', '07', '08', '09', '10', 'J', 'Q', 'K', 'A'];

// Build a 'master' deck of 'card' objects used to create shuffled decks
const masterDeck = buildMasterDeck();
//renderDeckInContainer(masterDeck, document.getElementById('master-deck-container'));

/*----- app's state (variables) -----*/
let shuffledDeck;

/*----- cached element references -----*/
const shuffledContainer = document.getElementById('shuffled-deck-container');

/*----- event listeners -----*/
document.querySelector('button').addEventListener('click', renderNewShuffledDeck);

/*----- functions -----*/
function getNewShuffledDeck() {
    // Create a copy of the masterDeck (leave masterDeck untouched!)
    const tempDeck = [...masterDeck];
    const newShuffledDeck = [];
    while (tempDeck.length) {
        // Get a random index for a card still in the tempDeck
        const rndIdx = Math.floor(Math.random() * tempDeck.length);
        // Note the [0] after splice - this is because splice always returns an array and we just want the card object in that array
        newShuffledDeck.push(tempDeck.splice(rndIdx, 1)[0]);
    }
    return newShuffledDeck;
}

function renderNewShuffledDeck() {
    // Create a copy of the masterDeck (leave masterDeck untouched!)
    shuffledDeck = getNewShuffledDeck();
    //renderDeckInContainer(shuffledDeck, shuffledContainer);
}

function renderDeckInContainer(deck, container) {
    container.innerHTML = '';
    // Let's build the cards as a string of HTML
    let cardsHtml = '';
    deck.forEach(function (card) {
        cardsHtml += `<div class="card ${card.face}"></div>`;

    });

    // Or, use reduce to 'reduce' the array into a single thing - in this case a string of HTML markup 
    // const cardsHtml = deck.reduce(function(html, card) {
    //   return html + `<div class="card ${card.face}"></div>`;
    // }, '');
    container.innerHTML = cardsHtml;
    //  console.log(container.innerHTML, 'THIS IS ADDED TO CONTAINER ');
}

function buildMasterDeck() {
    const deck = [];
    // Use nested forEach to generate card objects
    suits.forEach(function (suit) {
        ranks.forEach(function (rank) {
            deck.push({
                // The 'face' property maps to the library's CSS classes for cards
                face: `${suit}${rank}`,
                // Setting the 'value' property for game of blackjack, not war
                value: Number(rank) || (rank === 'A' ? 11 : 10)
            });
        });
    });
    return deck;
}

renderNewShuffledDeck();

/*===================================== My Code ===================*/

let playerCards = [];
let dealerCards = [];
let playerResult = [];
let dealerResult = [];
playAgain = false;
let value;
// button play again

let showPlayerScore = document.querySelector('.playercount').innerHTML;
let showDealerScore = document.querySelector('.dealercount').innerHTML;
let playerContainer = document.querySelector('.playerCard');
let dealerContainer = document.querySelector('.dealerCard');

// gettting random cards
function randomCards() {
    let random = Math.floor(Math.random() * shuffledDeck.length);
    //console.log(shuffledDeck[random])
    return shuffledDeck[random];

}

document.querySelector('.playAgain')
    .addEventListener('click', playGame);
// play the game

function playGame() {

    playerCards = [randomCards(shuffledDeck), randomCards(shuffledDeck)];
    dealerCards = [randomCards(shuffledDeck), randomCards(shuffledDeck)];


    return playerCards, dealerCards;
}

playGame();

console.log(playerCards, 'this is the new player card');
renderDeckInContainer(playerCards, playerContainer);
renderDeckInContainer(dealerCards, dealerContainer);
// // //---------let playAgain = false-------------------

// while (playAgain !== true) {


// generating random numbers for player and dealer
// and starting the game

//---------------- result and EventListener -----------------

// document.querySelector('.check')
//     .addEventListener('click', result);

// function result() {
//     if (getValue(dealerCards) <= '21' &&
//         getValue(dealerCards) >= getValue(playerCards)) {
//         //if this condition become true game will stop
//         //and dealer will win
//         playAgain = false;
//         console.log('dealer hand', getValue(dealerCards));
//         console.log('dearler won');
//     }
//     else if (getValue(playerCards) <= '21' &&
//         getValue(playerCards) > getValue(dealerCards)) {
//         //if this condition become true game will stop
//         //and dealer will win
//         playAgain = false;
//         console.log('player hand', getValue(playerCards));
//         console.log('[player] won');
//     }
//     else {
//         console.log('continu')
//         playAgain = true;
//     }
// }


//------------ calculating the value of the hands --------------
function getValue(hand) {

    let sum = 0;
    hand.forEach(function (e) {

        //console.log(e)
        sum += e.value;

    });
    return sum;
}

//------------- getting classes from html and adding eventlistener ----------
let btnStay = document.querySelector('#stay').addEventListener('click', stay)
let btnHit = document.querySelector('#hit').addEventListener('click', hit);



// -------------- Dealer turn to play --------------

function stay() {

    console.log(dealerCards)
    //Checking the value of hands if they are under 21
    if (getValue(dealerCards) > '21' &&
        getValue(dealerCards) === getValue(playerCards)) {
        //if this condition become true game will stop
        //and dealer will win
        
        console.log('dealer Won', getValue(dealerCards));
        renderDeckInContainer(dealerCards, dealerContainer);
        playAgain = false;
        
        

    }  //if the dealer cards value more than 21 dealer will lose
    else if (getValue(dealerCards) > '21') {
        renderDeckInContainer(dealerCards, dealerContainer);
        console.log('dealer lost', getValue(dealerCards,
            'player Won!', getValue(playerCards)))
        playAgain = false;
    }
    //if the above two condition is false dealer can get more cards 
    else {
        dealerCards.push(randomCards(shuffledDeck));
        console.log('dealer hand', getValue(dealerCards));
        renderDeckInContainer(dealerCards, dealerContainer);
        playAgain = true;
    }
}


// ---------------------- play turn to play


function hit() {
    
    //if players card value is above 21 player will lose 
    if (getValue(playerCards) < '21') {
        playerCards.push(randomCards(shuffledDeck));
        console.log('player hand ', getValue(playerCards));
        renderDeckInContainer(playerCards, playerContainer);
        playAgain = false;

    }
    else if (getValue(playerCards) === '21') {

        console.log('player won ', getValue(playerCards));
        renderDeckInContainer(playerCards, playerContainer);
    }
    // if the player cards value is under 21, can get more cards
    else {

        renderDeckInContainer(playerCards, playerContainer);
        console.log('player hand ', getValue(playerCards), 'player lost');
        playAgain = true;
    }
}
    // hit();

    // hit();
    // playGame();

    // console.log('player hand: ', getValue(playerCards));
    // console.log('dealer hand: ', getValue(dealerCards));
    //console.log("player: ", playerCards, "de" , dealerCards);


//result();


