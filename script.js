'use strict';

let secretNumber = Math.trunc(Math.random() * 5) + 1;
let score = 10;
let highscore = 0;

const displayMessage = message =>
  (document.querySelector('.message').textContent = message);
/* const displayMessage = function(message){
  document.querySelector('.message').textContent = message;
}; */

document.querySelector('.btn.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    //When Player no input number
    // document.querySelector('.message').textContent = 'No Number!';
    displayMessage('No Number !!');
  } else if (guess === secretNumber) {
    //When Player input correct number
    // document.querySelector('.message').textContent = 'Correct Number!';
    displayMessage('Correct Number!');
    score = score + 1;
    document.querySelector('.score').textContent = score;
    document.body.style.backgroundColor = 'rgb(64, 168, 50)';
    document.querySelector('.number').style.width = '25rem';
    document.querySelector('.number').textContent = secretNumber;
    secretNumber = Math.trunc(Math.random() * 5) + 1;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  //When wrong with Refactoring koding
  else if (guess !== secretNumber) {
    if (score > 1) {
      /* document.querySelector('.message').textContent =
        guess > secretNumber ? 'Too High!!' : 'Too Low!!'; */
      //Memakai if
      displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low!');
      score = score - 1;
      document.querySelector('.score').textContent = score;
      document.querySelector('.number').textContent = '?';
      document.body.style.backgroundColor = '#222';
    } else {
      document.querySelector('.message').textContent = 'You Lose!';
      // score = score - 1;
      document.querySelector('.score').textContent = '0';
      document.body.style.backgroundColor = 'rgb(199, 72, 72)';
    }
    document.querySelector('.number').style.width = '15rem';
  } /* 
  else if (guess > secretNumber) {
    //When Player input wrong number
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High!';
      score = score - 1;
      document.querySelector('.score').textContent = score;
      document.querySelector('.number').textContent = '?';
      document.body.style.backgroundColor = '#222';
    } else {
      document.querySelector('.message').textContent = 'You Lose!';
      // score = score - 1;
      document.querySelector('.score').textContent = '0';
      document.body.style.backgroundColor = 'rgb(199, 72, 72)';
    }
    document.querySelector('.number').style.width = '15rem';
  } else if (guess < secretNumber) {
    //When Player input wrong number
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low!';
      score = score - 1;
      document.querySelector('.score').textContent = score;
      document.querySelector('.number').textContent = '?';
      document.body.style.backgroundColor = '#222';
    } else {
      document.querySelector('.message').textContent = 'You Lose!';
      // score = score - 1;
      document.querySelector('.score').textContent = '0';
      document.body.style.backgroundColor = 'rgb(199, 72, 72)';
    }
    document.querySelector('.number').style.width = '15rem';
  } */
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.guess').textContent = '';
  secretNumber = Math.trunc(Math.random() * 5) + 1;
  // highscore.textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.body.style.backgroundColor = '#222';
  document.querySelector('.number').width = '15rem';
});
