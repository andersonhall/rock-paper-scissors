// Computer's selection
function computerPlay() {
  var selectionArr = ['rock', 'paper', 'scissors'];
  return selectionArr[Math.floor(Math.random() * selectionArr.length)];
};
    
// Points initialize
var w = 0;
var l = 0;
    

//  DOM stuff
const results = document.querySelector('#results');
const score = document.querySelector('#score');
const end = document.querySelector('#end');

// Score keeper
function updateScore() {
  
  score.textContent = 'Player: ' + w + ' ' + 'Computer: ' + l;
  if (w === 5) {    
    var btn = document.createElement('button');
    var t = document.createTextNode('You Won! Play Again?');
    btn.appendChild(t);
    end.appendChild(btn);
    document.getElementById('rock').disabled = true;
    document.getElementById('paper').disabled = true;
    document.getElementById('scissors').disabled = true
    btn.addEventListener('click', startGame);
    return;
  } 
  
  if (l === 5) {
    var btn = document.createElement('button');
    var t = document.createTextNode('You Lost! Play Again?');
    btn.appendChild(t);
    end.appendChild(btn);
    document.getElementById('rock').disabled = true;
    document.getElementById('paper').disabled = true;
    document.getElementById('scissors').disabled = true;
    btn.addEventListener('click', startGame);
    return;
  }
  
  // Resets game to original state
  function startGame() {
    w = 0;
    l = 0;
    score.textContent = '';
    results.textContent = '';
    end.textContent = '';
    document.getElementById('rock').disabled = false;
    document.getElementById('paper').disabled = false;
    document.getElementById('scissors').disabled = false;
  };
};



// Play a single round
function playRound(playerSelection, computerSelection) {      
  if (playerSelection === 'rock') {
    if (computerSelection === 'scissors') {
      w++;
      updateScore();
      return results.textContent = 'You Win! Rock beats scissors.';
    } 
        
    if (computerSelection === 'paper') {
      l++;
      updateScore();
      return results.textContent = 'You Lose! Paper beats rock.';
    } 
        
    else {
      updateScore();
      return results.textContent = 'Tie!';
    }
        
  } else if (playerSelection === 'paper') {
    if (computerSelection === 'rock') {
      w++;
      updateScore();
      return results.textContent = 'You Win! Paper beats rock.';
    } 
        
    if (computerSelection === 'scissors') {
      l++;
      updateScore();
      return results.textContent = 'You Lose! Scissors beats paper.';
    } 
        
    else {
      updateScore();
      return results.textContent = 'Tie!';
    }
        
  } else if (playerSelection === 'scissors') {
    if (computerSelection === 'paper') {
      w++;
      updateScore();
      return results.textContent = 'You Win! Scissors beats paper.';
    } 
        
    if (computerSelection === 'rock') {
      l++;
      updateScore();
      return results.textContent = 'You Lose! Rock beats scissors.';
    } 
        
    else {
      updateScore();
      return results.textContent = 'Tie!';
    } 
  } 
};

// Event listeners for buttons
var r = document.querySelector('#rock');
r.addEventListener('click', function() {
  computerSelection = computerPlay();
  playRound('rock', computerSelection);
});

var p = document.querySelector('#paper');
p.addEventListener('click', function() {
  computerSelection = computerPlay();
  playRound('paper', computerSelection);
});

var s = document.querySelector('#scissors');
s.addEventListener('click', function() {
  computerSelection = computerPlay();
  playRound('scissors', computerSelection);
});