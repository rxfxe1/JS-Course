'use strict';

// Selecting elements
const player0Elmt = document.querySelector('.player--0');
const player1Elmt = document.querySelector('.player--1');
const score0Elmt = document.getElementById('score--0');
const score1Elmt = document.getElementById('score--1');
const current0Elmt = document.getElementById('current--0');
const current1Elmt = document.getElementById('current--1');

const diceElmt = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

// Starting conditions
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0Elmt.textContent = 0;
  score1Elmt.textContent = 0;
  current0Elmt.textContent = 0;
  current1Elmt.textContent = 0;

  diceElmt.classList.add('hidden');
  player0Elmt.classList.remove('player--winner');
  player1Elmt.classList.remove('player--winner');
  //   document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');

  player0Elmt.classList.add('player--active'); // default active player
  player1Elmt.classList.remove('player--active');
  //   document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
};
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0Elmt.classList.toggle('player--active');
  player1Elmt.classList.toggle('player--active');
};

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generate random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display dice
    diceElmt.classList.remove('hidden');
    diceElmt.src = `img/dice-${dice}.png`;

    // 3. Check for rolled 1
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
      // Switch to next player
      switchPlayer();

      // currentScore = Number(document.getElementById(`current--${activePlayer}`).textContent);
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    // scores[1] = scores[1] + currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    // 2. Check is player's score is >= 100
    if (scores[activePlayer] >= 100) {
      // Finish the game
      playing = false;
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
      diceElmt.classList.add('hidden');
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
