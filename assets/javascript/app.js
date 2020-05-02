
//$(document).ready(function(){
//TriviaGame
    
let correct;
let incorrect;
let timer;
let intervalID;
let indexQandA = 0; //index to load a different question each round without the game reset or screen refresh
let answered = false; //variable to stop the timer if user has clicked an answer
let correctAnswers= 0;
let incorrectAnswers= 0;

//let output = [];
let myQuestions = [
    {
       Questions: "Whos is the leader of the group",
       Answers: ['Leonardo', 'Master Splinter', 'April Oneil', 'Michaelangelo'],
       correct: 'Master Splinter',
    },
    {
        Questions: "The happy go lucky dude that loves pizza is",
        Answer: ['Leonardo', 'Master Splinter', 'Donatello', 'Michaelangelo'],
        correct: 'Michaelangelo',
    },
    {
        Questions: "Who is the turtles worst enemy",
        Answer: ['Foot Soldier Clan', 'Shredder', 'April Oneil', 'Raphael'],
        correct: 'Shredder',
    },
    {
        Questions: "What transformed the turtles into Teenage Muntant Ninja Turtles",
        Answer: ['Ooze', 'Microwaved Pizza', 'Slime', 'radiation'],
        correct: 'Ooze',
    },
]

var quizContainer = document.getElementById('quiz-area');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);


function generateQuiz(questions, quizContainer, resultsContainer, submitButton){
//start button

$(document).on('click', '#start', 'myQuestions', function(){
start();
})

function start() {
correct = 0;
incorrect = 0;
timer = 5;
myQuestions;
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
      //stop()
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
    );

$('#start').remove()

$('#previous').click(function(){
 


function showQuestions(questions, quizContainer){
        // we'll need a place to store the output and the answer choices
        let output = [];
        let answers;

        // for each question...
        for(let i=0; i<myQuestions.length; i++){
            
            // first reset the list of answers
            answers = [];

            // for each available answer...
            for(letter in myQuestions[i].answers){

                // ...add an html radio button
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+ i +'" value="'+letter+'">'
                        + letter + ': '
                        + questions[i].answers[letter]
                    + '</label>'
                );
            }

            // add this question and its answers to the output
            output.push(
                '<div class="quiz-area">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }

        // finally combine our output list into one string of html and put it on the page
        quizContainer.innerHTML = output.join('');
    }


    function showResults(questions, quizContainer, resultsContainer){
        
        // gather answer containers from our quiz
        var answerContainers = quizContainer.querySelectorAll('.answers');
        
        // keep track of user's answers
        var userAnswer = '';
        var numCorrect = 0;
        
        // for each question...
        for(var i=0; i<questions.length; i++){

            // find selected answer
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            
            // if answer is correct
            if(userAnswer===questions[i].correctAnswer){
                // add to the number of correct answers
                numCorrect++;
                
                // color the answers green
                answerContainers[i].style.color = 'lightgreen';
            }
            // if answer is wrong or blank
            else{
                // color the answers red
                answerContainers[i].style.color = 'red';
            }
        }

        // show number of correct answers out of total
        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }

    // show questions right away
    showQuestions(questions, quizContainer);
    
    // on submit, show results
    submitButton.onclick = function(){
        showResults(questions, quizContainer, resultsContainer);
    }

})
}
}