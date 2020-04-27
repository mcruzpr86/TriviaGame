//JavaScript 

  //I tried doing this more challening homework but felt like it got too advance for me, got lost in it and decided to change over
  //to doing the Pyschic Game, will turn this one commented with some Psudocode and will resubmit it when I feel more comfortable with it.
    
    // Here i need to place a table with content showing wins, the current word to guess, a hint picture, guesses remaining, letters guessed.
    // create variable with guesses; Character names: Leonardo, Raphael, Michelangelo, Donatello, April, Splinter, Shredder
    // hint colum should contain variation of photo or phrase
    // create guessing area within table
    // answer area with photo of correct guess
    // create guessing loops with the letters of the alphabet
    
   
    var questions = [];
    var answer = '';
    var guessed = [];
    var maxWrong = 6;
    var mistakes = 0;
    let wordStatus = null;


    //console.log

    for (var i = 0; i < characters.length; i++) {
      console.log(characters[i]);
   }


    // Listener
    document.onkeydown = function (event) {
      console.log(event.key)
    }


//press start to begin. 

  document.onkeyup = function(event) {
    var startGame = String.fromCharCode(event.keycode).toLowerCase();
    alert('COWABUNGA DUDES! The Game Has Begun');
  
  }

  // Random word generator
    
  function characterAnswers() {
    var randomWord = characters[Math.floor (Math.random() * characters.length)];
    console.log (randomWord)

  }
  
//Alphabet buttons
//document.getElementById('maxWrong').innerHTML = maxWrong;

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
    updateHangmanPicture();
  }
}

//function that creates the lines the player will type on _ _ _ _ _ _
function guessedWord() {
  wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');

  document.getElementById('wordSpotlight').innerHTML = wordStatus;
}


function updateMistakes() {
  document.getElementById('mistakes').innerHTML = mistakes;
}

//reset the game
function reset() {
  let text = document.getElementById('reset');
  text.innerText = 'Restart Game'
  counter = 0;
  
  characterAnswers();
  guessedWord();
  updateMistakes();
  generateButtons();

}

characterAnswers();
generateButtons();
guessedWord();
    