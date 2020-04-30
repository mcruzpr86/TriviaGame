//JavaScript
    
   
    let correct;
    let incorrect;
    let timer;

    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');

    let myQuestions = [
        {
            Question: "Whos is the leader of the group",
            choiceA: 'Leonardo',
            choiceB: 'Master Splinter',
            choiceC:'April Oneil',
            choiceD: 'Michaelangelo',
            correctAnswer: 'B',
        },
        {
            Question: "The happy go lucky dude that loves pizza is",
            Answers: ['Leonardo', 'Master Splinter', 'Donatello', 'Michaelangelo'],
            correctAnswer: 'Michaelangelo',
        },
        {
            Question: "Who is the turtles worst enemy",
            Answers: ['Foot Soldier Clan', 'Shredder', 'April Oneil', 'Raphael'],
            correctAnswer: 'Shredder',
        },
        {
            Question: "What transformed the turtles into Teenage Muntant Ninja Turtles",
            Answers: ['Ooze', 'Microwaved Pizza', 'Slime', 'radiation'],
            correctAnswer: 'Ooze',
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
        '<h2>Time Remaining</h2><span id= "timer">120</span>'
        
    )
    $('#start').remove()



        // render a question 
        //TEST (not working)
function renderQuestion(){
  let q = myQuestions[runningQuestion];
  
  myQuestion.innerHTML = "<p>"+ q.question +"</p>";
 
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
  choiceD.innerHTML = q.choiceD;
}

start.addEventListener("click",start);







    ///////


    function buildQuiz(){
        // variable to store the HTML output
        const output = [];
      
        // for each question...
        myQuestions.forEach(
          (currentQuestion, questionNumber) => {
      
            // variable to store the list of possible answers
            const answers = [];
      
            // and for each available answer...
            for(letter in currentQuestion.answers){
      
              // ...add an HTML radio button
              answers.push(
                `<label>
                  <input type="radio" name="question${questionNumber}" value="${letter}">
                  ${letter} :
                  ${currentQuestion.answers[letter]}
                </label>`
              );
            }
      
            // add this question and its answers to the output
            output.push(
              `<div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join('')} </div>`
            );
          }
        );
      
        // finally combine our output list into one string of HTML and put it on the page
        quizContainer.innerHTML = output.join('');
      }
    
      myQuestions.forEach( (currentQuestion, questionNumber) => {
        // the code we want to run for each question goes here
      });
    
    
     
    
        
    
}

