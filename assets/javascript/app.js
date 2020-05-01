//$(document).ready(function(){
//TriviaGame
    
    let correct;
    let incorrect;
    let timer;
    let intervalID;
    let unanswerCount;
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
    timer = 5;
    correctAnswers = 0;
    incorrectAnswers = 0;
    unanswerCount = 0;
    setInterval(timer);
  
    //loadQandA();

    setInterval(() => {
       timer -- 
       if (timer === 0) {
          unanswerCount++;
          gameDone()
          stop()
          clearInterval(timer);
          
          //console.log('game finished')  
       }
    $('#timer').html(timer)
    }, 1000);
    
    
    function gameDone() {
        
        clearInterval(setInterval);
        //console.log('end game')
    }

      //stop timer if reach 0
      
    $('#container').prepend(
        '<h4>Time Remaining</h4><span id= "timer">120</span>'
        )

    $('#questions').prepend(
      '<h4> Questions: </h4><span> </span>'
    )

    $('#start').remove()

    $('#previous').click(function(){
     
     })



    //time stop
    //function stop() {
    //  running = false;
    //  clearInterval(interval);
   // }
    
/////clearInterval()
//stop()
 

//Loading the questions
  }
//}) end of document ready
