/*----- constants -----*/
const suits = ['s', 'c', 'd', 'h'];
const ranks = ['02', '03', '04', '05', '06', '07', '08', '09', '10', 'J', 'Q', 'K', 'A'];

// Build a 'master' deck of 'card' objects used to create shuffled decks
const masterDeck = buildMasterDeck();

/*----- app's state (variables) -----*/
let shuffledDeck;
/*----- cached element references -----*/
const shuffledContainer = document.getElementById('shuffled-deck-container');

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
<<<<<<< HEAD


=======
>>>>>>> main
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
// variables 
let playerCards = [];
let dealerCards = [];
let playerScore = 0;
let dealerScore = 0;
playAgain = false;

<<<<<<< HEAD

=======
//round Winner inner 
let roundWinner = document.querySelector('#roundWinner');
//output scores
let showDealerScore = document.querySelector('#dealerScore');
>>>>>>> main
let showPlayerScores = document.querySelector('#playerScore');
//Players Container 
let playerContainer = document.querySelector('.playerCard');
let dealerContainer = document.querySelector('.dealerCard');
// players boxs
let dealerSection = document.querySelector('.dealerSection');
let playerSection = document.querySelector('.playerSection');
// buttons and names and EventListners
let playerName = document.querySelector('.player');
let dealerName = document.querySelector('.dealer')
let btnCheck = document.querySelector('.check');
let btnPlayAgain = document.querySelector('.playAgain');
let btnShuffle = document.querySelector('.card-container');
let btnPlayerHit = document.querySelector('#playerhit');
let btnPlayerStay = document.querySelector('#playerstay');
let btnDealerHit = document.querySelector('#dealerhit');
let btnDealerStay = document.querySelector('#dealerstay');
let btnBet = document.querySelector('#bet')
<<<<<<< HEAD
=======
document.querySelector('button').addEventListener('click', renderNewShuffledDeck);
btnPlayerHit.style.border = '3px solid red'
document.querySelector('#playerhit').addEventListener('click', playerhit);

>>>>>>> main
// gettting random cards
function randomCards() {
    let random = Math.floor(Math.random() * shuffledDeck.length);
    //console.log(shuffledDeck[random])
    return shuffledDeck[random];
}
<<<<<<< HEAD
//---------------------------- This is the PlayAgain button -------------

//----------------------- Credit funstion --------------//
// let playerbetEl = document.querySelector('#playerbet');
 

// function bet(){
    
   
//     // renderDeckInContainer(playerCards, playerContainer); 
//     // renderDeckInContainer(dealerCards, dealerContainer);
//     playerCredit -= playerBet
//     playerBet = playerbetEl.value;
//     if(playerBet <= playerCredit){  
        
        
//         btnPlayerHit.style.border = '3px solid red';
//         console.log("somethings wrong")
//         console.log(playerBet , playerCredit);
//         playGame();
//         // renderDeckInContainer(playerCards, playerContainer); 
//         // renderDeckInContainer(dealerCards, dealerContainer);
//     }
//     else{
//         console.log("somethings wrong")
//         console.log(playerBet , playerCredit);
//     }
   
// }
//---------------------- This is where the game starts-----------------
function playGame() {
    playerScore = showPlayerScores.innerHTML;
    dealerSection.style.border = '';
    btnPlayAgain.style.border = '';
    dealerCards = [];
    // console.log(cardPieces.style.display)
=======
//---------------------- This is where the game starts-----------------
function playGame() {
    roundWinner.innerHTML = 'Who Wins?'
    btnPlayerHit.style.border = '3px solid red'
    dealerSection.style.border = '';
    btnPlayAgain.style.border = '';
    dealerCards = [];
>>>>>>> main
    playerCards = [];
    dealerContainer.textContent = '';
    playerContainer.textContent = '';
    btnShuffle.style.border = '3px solid green';
<<<<<<< HEAD
    playerName.style.border ='3px solid red';
    btnCheck.removeEventListener('click', checkResult);
    if(!btnPlayerHit.addEventListener('click', playerhit)){
        btnPlayerHit.addEventListener('click', playerhit);
    }
    // return playerCards, dealerCards;
    
}

// renderDeckInContainer(playerCards, playerContainer);
// renderDeckInContainer(dealerCards, dealerContainer);
//---------------- result and EventListener -----------------
 
function checkResult() {
   btnCheck.style.border = '';
   btnPlayAgain.style.border = '3px solid red'
   if(getValue(dealerCards) <= '21' &&
   getValue(dealerCards) >= getValue(playerCards)){
       dealerScore++;
       console.log(dealerScore,'dealer wins')
   }
   else if(getValue(dealerCards) < '21' && 
            getValue(playerCards) > '21'){
                dealerScore++;
                console.log(dealerScore , 'dealer Credit')
                
            console.log('dealer wins');
            }
    else { 
          console.log('player wins')
             playerScore++;
            console.log(playerScore , 'player Credit')
            
   }   
   document.querySelector('.playAgain').addEventListener('click',playGame);
   btnDealerStay.removeEventListener('click',dealerstay);
=======
    playerName.style.border = '3px solid red';
    btnCheck.removeEventListener('click', checkResult);
    if (!btnPlayerHit.addEventListener('click', playerhit)) {
        btnPlayerHit.addEventListener('click', playerhit);
    }
}

//------------------------ result function--------
//updates the scores 
function checkResult() {
    btnCheck.style.border = '';
    btnPlayAgain.style.border = '3px solid red'
    if (getValue(dealerCards) <= '21' &&
        getValue(dealerCards) >= getValue(playerCards)) {
        dealerScore++;
        roundWinner.innerHTML = 'Dealer Won!'
        console.log(dealerScore, 'dealer wins')
    }
    else if (getValue(dealerCards) < '21' &&
        getValue(playerCards) > '21') {
        dealerScore++;
        roundWinner.innerHTML = 'Dealer Won!'
        console.log('dealer wins');
    }
    else if (getValue(playerCards) > '21' &&
        getValue(dealerCards) > '21') {
        roundWinner.innerHTML = 'Tied!'
    }
    else {
        console.log('player wins')
        playerScore++;
        roundWinner.innerHTML = 'Player Won!'
    }
    showPlayerScores.textContent = playerScore;
    showDealerScore.textContent = dealerScore;
    document.querySelector('.playAgain').addEventListener('click', playGame);
    btnDealerStay.removeEventListener('click', dealerstay);
    btnShuffle.addEventListener('click', shuffleCards);
>>>>>>> main
}

//------------ calculating the value of the hands --------------
function getValue(hand) {
    let sum = 0;
    hand.forEach(function (e) {
        sum += e.value;
    });
    return sum;
}
<<<<<<< HEAD

// hit button EventListeners and border when the game starts 
btnPlayerHit.style.border = '3px solid red'
document.querySelector('#playerhit').addEventListener('click', playerhit);

//----------------------------When dealer hits stay-------------------
function dealerstay(){

=======

//----------------------------dealer stay -------------------
function dealerstay() {
>>>>>>> main
    dealerSection.style.border = '';
    btnDealerStay.style.border = '';
    btnDealerHit.style.border = '';
    check.style.border = '5px solid red';
    renderDeckInContainer(dealerCards, dealerContainer);
    btnDealerHit.removeEventListener('click', dealerhit);
    document.querySelector('.check').addEventListener('click', checkResult);
    btnCheck.addEventListener('check', checkResult);
}

// -------------- Dealer turn to play --------------
function dealerhit() {
    
    //Checking the value of hands if they are under 21
    if (getValue(dealerCards) < '21') {
        dealerCards.push(randomCards(shuffledDeck));
        console.log('dealer hand', getValue(dealerCards));
        renderDeckInContainer(dealerCards, dealerContainer);
        playAgain = false;
<<<<<<< HEAD

        }  
=======
    }
>>>>>>> main
    else {
        // dealerCards.push(randomCards(shuffledDeck));
        renderDeckInContainer(dealerCards, dealerContainer);
        playAgain = true;
    }
<<<<<<< HEAD
    document.querySelector('#dealerstay').addEventListener('click',dealerstay);
=======
    document.querySelector('#dealerstay').addEventListener('click', dealerstay);
>>>>>>> main
    btnDealerStay.style.border = '3px solid green'
    btnPlayerStay.removeEventListener('click', playerstay);
}

//--------------------------------------- Shuffle button -------------------------
document.querySelector('#shuffle').addEventListener('click', shuffleCards)
function shuffleCards() {
    btnPlayerHit.removeEventListener('click', playerhit)
    btnPlayerStay.removeEventListener('click', playerstay)
    btnPlayAgain.addEventListener('click', playGame);
    roundWinner.innerHTML = 'Really!'
    btnPlayAgain.style.border = '3px solid red'
    dealerContainer.textContent = '';
    playerContainer.textContent = '';
    dealerSection.style.border = '';
    playerSection.style.border = '';
    playerName.style.border = '';
    dealerName.style.border = '';
    btnCheck.style.border = '';
    btnPlayerHit.style.border = '';
    btnPlayerStay.style.border = '';
    btnDealerStay.style.border = '';
    btnDealerHit.style.border = '';
}

//-----------------------when Player hits stay -------------------
<<<<<<< HEAD
function playerstay(){
    document.querySelector('#dealerhit').addEventListener('click', dealerhit );
    btnPlayerHit.removeEventListener('click', playerhit);

    dealerSection.style.border = '5px solid red';
=======
function playerstay() {
    document.querySelector('#dealerhit').addEventListener('click', dealerhit);
    btnPlayerHit.removeEventListener('click', playerhit);
    dealerName.style.border = '3px solid red'
    dealerSection.style.border = '3px solid red';
>>>>>>> main
    playerSection.style.border = '';
    btnPlayerHit.style.border = '';
    btnPlayerStay.style.border = '';
    btnDealerHit.style.border = '3px solid red';
    playerName.style.border = '';
<<<<<<< HEAD
    
=======
>>>>>>> main
}

// ---------------------- play turn to play-------------------------
function playerhit() {
    playerSection.style.border = '3px solid red'
    playerName.style.border = '3px solid green'
    btnPlayerStay.style.border = '3px solid green';
    //if players card value is above 21 player will lose 
    if (getValue(playerCards) < '21') {
        playerCards.push(randomCards(shuffledDeck));
        renderDeckInContainer(playerCards, playerContainer);
        playAgain = false;
    }
    else {
        renderDeckInContainer(playerCards, playerContainer);
        playAgain = true;
    }
    document.querySelector('#playerstay').addEventListener('click', playerstay);
    btnDealerHit.removeEventListener('click', dealerhit);
    btnPlayAgain.removeEventListener('click', playGame)
<<<<<<< HEAD
=======
    btnShuffle.removeEventListener('click', shuffleCards);
>>>>>>> main
}






