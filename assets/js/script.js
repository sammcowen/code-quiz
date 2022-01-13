// references to elements
var timerEl = document.getElementById('timer');
// variables 
var startBtn = document.querySelector('#start');



//INTIATORS
startBtn.addEventListener('click', startQuiz);
function startQuiz() {
    var timeLeft = 60;
    var gameTime = setInterval(function() {
        
        if(timeLeft > 0) {
            timerEl.textContent = "Time: " + timeLeft + " seconds";
           timeLeft --;
        
        } else {
            timerEl.textContent = "Time's Up!";
            clearInterval(gameTime);
        }
    }, 1000);
    console.log(setInterval)
};
