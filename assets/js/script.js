// references to elements
var timerEl = document.getElementById('timer');
var textEl = document.getElementById('questions');
var answer1 = document.getElementById('answer1');
var answer2= document.getElementById('answer2');
var answer3= document.getElementById('answer3');
var answer4= document.getElementById('answer4');

// variables 
var startBtn = document.querySelector('#start');
let currentIndex = 0; 
//var userScore = 0;
var questions = [
    {
        "questionNum": 1,
        "questionText":"Which of the following functions of Array object extracts a section of an array and returns a new array?",
        "answerOptions":['a.splice()',
            'b.slice()',
            'c.push()',
            'd. none of the above'],
        "correctAnswer": "b.slice()"
    },
      {
      "questionNum": 2,
      "questionText": "Which is a type of pop up box in Javascript?",
      "answerOptions": ['a. prompt',
      'b. alert',
             'c. confirm',
             'd. all of the above'],
         "correctAnswer": "d. all of the above"
     },
     {
       "questionNum": 3,
       "questionText": "Which data type returns a value of true or false?",
       "answerOptions": ['a. Boolean',
           'b. string',
           'c. number', 
           'd. null'],
       "correctAnswer": "a. Boolean"
   },
    {
       "questionNum": 4,
    "questionText": "How do you call/invoke a function named myFunction?",
   "answerOptions": ['a. myFunction = function',
       'b. myFunction();',
       'c. var myFunction= function();' ,
       'd. none of the above'],
   "correctAnswer": "b. myFunction();"

   },
   {
       "questionNum": 5,
       "questionText":"Which of the following is the proper syntax for an Array?",
       "answerOptions":[
           'a. var fruits = ["apples","bananas", "oranges"];',
           'b. var fruits = {apples, bananas, oranges};',
           'c. var fruits = (1: apples, 2: bananas, 3: oranges);',
           'd. none of the above'],
           "correctAnswer": 'a. var fruits = ["apples","bananas", "oranges"];'
       

     }

];



//INTIATORS
startBtn.addEventListener('click', startQuiz);
answer1.addEventListener('click', nextQuestion);
answer2.addEventListener('click', nextQuestion);
answer3.addEventListener('click', nextQuestion);
answer4.addEventListener('click', nextQuestion);

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
    answer1.style.display = "block";
    answer2.style.display = "block";
    answer3.style.display = "block";
    answer4.style.display = "block";
    textEl.textContent = questions[currentIndex].questionText ;
    answer1.textContent = questions[currentIndex].answerOptions[0]; 
    answer2.textContent = questions[currentIndex].answerOptions[1];
    answer3.textContent = questions[currentIndex].answerOptions[2];
    answer4.textContent = questions[currentIndex].answerOptions[3];  
};
// this is how the next questions show up.
function nextQuestion() {
    
    currentIndex ++;
    textEl.textContent = questions[currentIndex].questionText ;
    answer1.textContent = questions[currentIndex].answerOptions[0]; 
    answer2.textContent = questions[currentIndex].answerOptions[1];
    answer3.textContent = questions[currentIndex].answerOptions[2];
    answer4.textContent = questions[currentIndex].answerOptions[3]; 
    
};
// trying to get the game end to display if all questions are 
// clicked or the timer is up.and remove the buttons
function endGame() {
    if (currentIndex > 4 || timeLeft === 0) {
        textEl.textContent = "Game's over!";
        answer1.style.display="none";
        answer2.style.display="none";
        answer3.style.display="none";
        answer4.style.display="none";

    }
}
