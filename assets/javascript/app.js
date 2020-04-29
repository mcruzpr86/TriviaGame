//JavaScript
    
   
    let correct;
    let incorrect;
    let timer;

    let questions = [
        {
            Question: "Whos is the leader of the group",
            Answers: ['Leonardo', 'Master Splinter', 'April Oneil', 'Michaelangelo'],
            correctAnswer: 'Master Splinter',
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

    function questions() {
        console.log ('questions')
    }
    $('#questions').prepend(
        '<span id= "questions"></span>'
    )
}

questions()


 

    