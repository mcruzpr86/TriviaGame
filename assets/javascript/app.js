//JavaScript
    
   
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
    