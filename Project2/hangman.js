var animal = ["tiger", "panda", "raccoon", "dodo",
             "giraffe", "penguins", "octopus","spider","kiwi","elephant"]

let answer = '';
let maxWrong = 5;
let mistakes = 0;
let guessed = [];
let wordStatus = null;


 // Hangman
canvas =  function(){

  myStickman = document.getElementById("stickman");
  context = myStickman.getContext('2d');
  context.beginPath();
  context.strokeStyle = "#fff";
  context.lineWidth = 2;
};

  head = function(){
    myStickman = document.getElementById("stickman");
    context = myStickman.getContext('2d');
    context.beginPath();
    context.arc(60, 25, 10, 0, Math.PI*2, true);
    context.stroke();
  }
  
draw = function($pathFromx, $pathFromy, $pathTox, $pathToy) {
  
  context.moveTo($pathFromx, $pathFromy);
  context.lineTo($pathTox, $pathToy);
  context.stroke(); 
}

 frame1 = function() {
   draw (0, 150, 150, 150);
   draw (10, 10, 10, 600);
 };
 

 frame2 = function() {
   draw (0, 5, 70, 5);
   draw (90, 5, 60, 15);
 };


 torso = function() {
   draw (60, 36, 60, 70);
 };

 Arms = function() {
   draw (60, 46, 100, 50);
   draw (60, 46, 20, 50);
 };

 Legs = function() {
   draw (60, 70, 100, 100);
   draw (60, 70, 20, 100);
 };

 
drawArray = [frame1, frame2, head, torso, Arms, Legs]; 

// Animate man
var animate = function () {
  var drawMe = mistakes ;
  drawArray[drawMe]();
}

function randomWord() {
  answer = animal[Math.floor(Math.random() * animal.length)];
}

function generateButtons() {
  let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
    `
      <button
        class="btn btn-lg btn-primary m-2"
        id='` + letter + `'
        onClick="handleGuess('` + letter + `')"
      >
        ` + letter + `
      </button>
    `).join('');

  document.getElementById('keyboard').innerHTML = buttonsHTML;
}

function handleGuess(chosenLetter) {
  guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
  document.getElementById(chosenLetter).setAttribute('disabled', true);

  if (answer.indexOf(chosenLetter) >= 0) {
    guessedWord();
    checkIfGameWon();
  } else if (answer.indexOf(chosenLetter) === -1) {
    mistakes++;
    updateMistakes();
    checkIfGameLost();
    animate();
  }
}


function checkIfGameWon() {
  if (wordStatus === answer) {
    document.getElementById('keyboard').innerHTML = 'You Won!!!';
  }
}

function checkIfGameLost() {
  if (mistakes === maxWrong) {
    document.getElementById('wordSpotlight').innerHTML = 'The answer was: ' + answer;
    document.getElementById('keyboard').innerHTML = 'You Lost!!!';
  }
}

function guessedWord() {
  wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');

  document.getElementById('wordSpotlight').innerHTML = wordStatus;
}

function updateMistakes() {
  document.getElementById('mistakes').innerHTML = mistakes;
}

function reset() {
  mistakes = 0;
  guessed = [];
  document.getElementById('clue').innerHTML ="";
  randomWord();
  guessedWord();
  updateMistakes();
  generateButtons();
   context.clearRect(0, 0, 400, 400);
}
document.getElementById('maxWrong').innerHTML = maxWrong;


function hint()
  {
    hints =
      ["Big Cat", "China Bear", "Trash Panda","Bird that can't fly and now extinct",
       "Animal With the Longest Neck", "Bird that can't fly", "8 Arm sea creature"
    ,"8 legs Insect", "Animal That has the Same Name as a Fruit","Largest animal on land"];

    var hintIndex = animal.indexOf(answer);
    document.getElementById('clue').innerHTML = 'Hint - ' + hints [hintIndex];
  }

randomWord();
generateButtons();
guessedWord();