//TriviaGame
    
    let correct;
    let incorrect;
    let timer;
    let intervalID;
    let indexQandA = 0; //index to load a different question each round without the game reset or screen refresh
    let answered = false; //variable to stop the timer if user has clicked an answer
    let correctAnswers= 0;
    let incorrectAnswers= 0;
    let triviaGame = [
        {
           Question: "Whos is the leader of the group",
           Answer: ['Leonardo', 'Master Splinter', 'April Oneil', 'Michaelangelo'],
           correct: 'Master Splinter',
        },
        {
            Question: "The happy go lucky dude that loves pizza is",
            Answer: ['Leonardo', 'Master Splinter', 'Donatello', 'Michaelangelo'],
            answer: 'Michaelangelo',
        },
        {
            Question: "Who is the turtles worst enemy",
            Answer: ['Foot Soldier Clan', 'Shredder', 'April Oneil', 'Raphael'],
            correct: 'Shredder',
        },
        {
            Question: "What transformed the turtles into Teenage Muntant Ninja Turtles",
            Answer: ['Ooze', 'Microwaved Pizza', 'Slime', 'radiation'],
            correct: 'Ooze',
        },
    ]


//start button

$(document).on('click', '#start', function(){
    start();
})

function start() {
    correct = 0;
    incorrect = 0;
    timer = 120;
    correctAnswers = 0;
    incorrectAnswers = 0;
    loadQandA();

    setInterval(() => {
       timer -- 
       if (timer == 0) {
          gameDone()
          console.log('game finished')  
       }
    $('#timer').html(timer)
    }, 1000);
    
    function gameDone() {
        console.log('end game')
    }
    
    $('#container').prepend(
        '<h4>Time Remaining</h4><span id= "timer">120</span>'
        
    )
    $('#start').remove()
    
    }  

//Loading the questions

function loadQandA() {
  answered = false; // will allow timeRemaining to be pushed back to <h5> after round reset....else statement in function timer()
      timeRemaining = 16;
      intervalID = setInterval(timer, 1000);
      if (answered === false) {
        timer();
}
  correct = triviaGame[indexQandA].correct;
  let question = triviaGame[indexQandA].question;
  $('#question').html(question);
  for (let i = 0; i < 4; i++) {
      let answer = triviaGame[indexQandA].answer[i];
      $('#answers').append('<h4 class= answersAll id=' + i + '>' + answer + '</h4>');
  }

  $("h4").click(function () {
      let id = $(this).attr('id');
      if (id === correct) {
          answered = true; // stops the timer
          $('#question').text("THE ANSWER IS: " + triviaGame[indexQandA].answer[correct]);
          correctAnswer();
      } else {
          answered = true; //stops the timer
          $('#question').text("YOU CHOSE: " + triviaGame[indexQandA].answer[id] + ".....HOWEVER THE ANSWER IS: " + triviaGame[indexQandA].answer[correct]);
          incorrectAnswer();
      }
  });
}


