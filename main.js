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
        cardsHtml += `<div class="card back-blue"></div>`;


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
// variables 
let playerCards = [];
let dealerCards = [];
let playerResult = [];
let dealerResult = [];
playAgain = false;

//Players Container 
let playerContainer = document.querySelector('.playerCard');
let dealerContainer = document.querySelector('.dealerCard');
// players boxs
let dealerSection = document.querySelector('.dealerSection');
let playerSection = document.querySelector('.playerSection');
// buttons and names 
let playerName = document.querySelector('.player');
let dealerName = document.querySelector('.dealer')
let btnCheck = document.querySelector('.check');
let btnPlayAgain = document.querySelector('.playAgain');
let btnShuffle = document.querySelector('.card-container');
let btnPlayerHit = document.querySelector('#playerhit');
let btnPlayerStay = document.querySelector('#playerstay'); 
let btnDealerHit = document.querySelector('#dealerhit');
let btnDealerStay = document.querySelector('#dealerstay');

// gettting random cards
function randomCards() {
    let random = Math.floor(Math.random() * shuffledDeck.length);
    //console.log(shuffledDeck[random])
    return shuffledDeck[random];
}
//---------------------------- This is the PlayAgain button -------------
document.querySelector('.playAgain').addEventListener('click', playGame);

//---------------------- This is where the game starts-----------------
function playGame() {
    // get two random cards and saving them into two variables 
    playerCards = [randomCards(shuffledDeck), randomCards(shuffledDeck)];
    dealerCards = [randomCards(shuffledDeck), randomCards(shuffledDeck)];
    // showning only the player cards
    renderDeckInContainer(playerCards, playerContainer); 
    renderDeckInContainer(dealerCards, dealerContainer);
    
    dealerSection.style.border = '';
    btnPlayAgain.style.border = '';
    btnPlayerHit.style.border = '3px solid red';
    btnPlayerStay.style.border = '3px solid green';
    btnShuffle.style.border = '3px solid green';
    playerName.style.border ='3px solid red';
    if(!btnPlayerHit.addEventListener('click', playerhit)){
        btnPlayerHit.addEventListener('click', playerhit);
        console.log('added the new eventListener ');
    }
    return playerCards, dealerCards;
    
}
playGame();
renderDeckInContainer(playerCards, playerContainer);
renderDeckInContainer(dealerCards, dealerContainer);
//---------------- result and EventListener -----------------
 document.querySelector('.check').addEventListener('click', checkResult);
function checkResult() {
   btnCheck.style.border = '';
   btnPlayAgain.style.border = '3px solid red'
   if(getValue(dealerCards) <= '21' &&
   getValue(dealerCards) >= getValue(playerCards)){
       console.log('dealer wins')
   }
   else if(getValue(dealerCards) < '21' && 
            getValue(playerCards) > '21'){
            console.log('dealer wins');
            }
    else {   console.log('player wins')
   }   
}
//------------ calculating the value of the hands --------------
function getValue(hand) {
    let sum = 0;
    hand.forEach(function (e) {
        sum += e.value;
    });
    return sum;
}
//------------- getting function from html and adding eventlistener ----------
document.querySelector('#playerstay').addEventListener('click', playerstay);
document.querySelector('#dealerstay').addEventListener('click',dealerstay);
document.querySelector('#playerhit').addEventListener('click', playerhit);
document.querySelector('#dealerhit').addEventListener('click', dealerhit );

//----------------------------When dealer hits stay-------------------
function dealerstay(){
    dealerSection.style.border = '';
    btnDealerStay.style.border = '';
    btnDealerHit.style.border = '';
    check.style.border = '5px solid red';
    renderDeckInContainer(dealerCards, dealerContainer);
}
// -------------- Dealer turn to play --------------
function dealerhit() {
    //Checking the value of hands if they are under 21
    if (getValue(dealerCards) < '21') {
        //if this condition become true game will stop
        //and dealer will win
        dealerCards.push(randomCards(shuffledDeck));
        console.log('dealer hand', getValue(dealerCards));
        renderDeckInContainer(dealerCards, dealerContainer);
        playAgain = false;

    }  //if the dealer cards value more than 21 dealer will lose
    else if (getValue(dealerCards) > '21') {
            renderDeckInContainer(dealerCards, dealerContainer);
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
//--------------------------------------- Shuffle button -------------------------
document.querySelector('#shuffle').addEventListener('click', shuffleCards)
function shuffleCards(){
    btnPlayAgain.style.border = '3px solid red'
    dealerContainer.textContent = '';
    playerContainer.textContent = '';

    dealerSection.style.border = '';
    playerSection.style.border = '';

    playerName.style.border = '';
    dealerName.style.border = '';
    
    
    btnCheck.style.border = '';

    btnPlayerHit.style.border = '';
    btnPlayerStay.style.border= '';

    btnDealerStay.style.border = '';
    btnDealerHit.style.border = '';   
}
//-----------------------when Player hits stay -------------------
function playerstay(){
    btnPlayerHit.removeEventListener('click', playerhit);
    dealerSection.style.border = '5px solid red';
    playerSection.style.border = '';
    btnPlayerHit.style.border = '';
    btnPlayerStay.style.border = '';
    btnDealerHit.style.border = '3px solid red';
    btnDealerStay.style.border = '3px solid green'
}

// ---------------------- play turn to play-------------------------
function playerhit() {
    playerSection.style.border = '5px solid red';
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



 
   

