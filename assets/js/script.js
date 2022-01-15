// references to elements
var timerEl = document.getElementById('timer');
var textEl = document.getElementById('questions');
var answer1 = document.getElementById('answer1');
var answer2= document.getElementById('answer2');
var answer3= document.getElementById('answer3');
var answer4= document.getElementById('answer4');
var yee = document.getElementById('test');
var initials = document.getElementById('text');
var initialsBtn = document.getElementById('initials');
var playAgainBtn = document.getElementById('replay');

// variables 

let timeLeft = 60;
var startBtn = document.querySelector('#start');
let currentIndex = 0; 
var questions = [
    {
        "questionNum": 1,
        "questionText":"Which of the following functions of Array object extracts a section of an array and returns a new array?",
        "answerOptions":['a.splice()',
            'b.slice()',
            'c.push()',
            'd. none of the above'],
        "correctAnswer": "answer2"
    },
      {
      "questionNum": 2,
      "questionText": "Which is a type of pop up box in Javascript?",
      "answerOptions": ['a. prompt',
      'b. alert',
             'c. confirm',
             'd. all of the above'],
         "correctAnswer": "answer4"
     },
     {
       "questionNum": 3,
       "questionText": "Which data type returns a value of true or false?",
       "answerOptions": ['a. Boolean',
           'b. string',
           'c. number', 
           'd. null'],
       "correctAnswer": "answer1"
   },
    {
       "questionNum": 4,
    "questionText": "How do you call/invoke a function named myFunction?",
   "answerOptions": ['a. myFunction = function',
       'b. myFunction();',
       'c. var myFunction= function();' ,
       'd. none of the above'],
   "correctAnswer": "answer2"

   },
   {
       "questionNum": 5,
       "questionText":"Which of the following is the proper syntax for an Array?",
       "answerOptions":[
           'a. var fruits = ["apples","bananas", "oranges"];',
           'b. var fruits = {apples, bananas, oranges};',
           'c. var fruits = (1: apples, 2: bananas, 3: oranges);',
           'd. none of the above'],
           "correctAnswer": 'answer1'
       

     },
     { "questionNum": 5,
     "questionText":"Which of the following is the proper syntax for an Array?",
     "answerOptions":[
         'a. var fruits = ["apples","bananas", "oranges"];',
         'b. var fruits = {apples, bananas, oranges};',
         'c. var fruits = (1: apples, 2: bananas, 3: oranges);',
         'd. none of the above'],
         "correctAnswer": 'answer1'

     }

];



//INTIATORS
startBtn.addEventListener('click', startQuiz);
answer1.addEventListener('click', checkAnswer);
answer2.addEventListener('click', checkAnswer);
answer3.addEventListener('click', checkAnswer);
answer4.addEventListener('click', checkAnswer);
initialsBtn.addEventListener('click', storeScore);
playAgainBtn.addEventListener('click', startQuiz);


function startQuiz() {    
    var userScore = timeLeft;
    var gameTime = setInterval(function() {
        
        if(timeLeft > 0) {
            
            timerEl.textContent = "Time: " + timeLeft + " seconds";
           timeLeft --;
        } else {
            timerEl.textContent = "Time's Up!";
           textEl.textContent = "ALL DONE! your score  is " + userScore+ "!";
            answer1.style.display = "none";
            answer2.style.display = "none";
            answer3.style.display = "none";
            answer4.style.display = "none";
            initials.style.display = "block";
            initialsBtn.style.display = "block";
            playAgainBtn.style.display = "block";
            
            

            clearInterval(gameTime);
        }
    }, 1000);
    startBtn.style.display = "none";
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
    var userScore = timeLeft;
    currentIndex ++;
    textEl.textContent = questions[currentIndex].questionText ;
    answer1.textContent = questions[currentIndex].answerOptions[0]; 
    answer2.textContent = questions[currentIndex].answerOptions[1];
    answer3.textContent = questions[currentIndex].answerOptions[2];
    answer4.textContent = questions[currentIndex].answerOptions[3]; 
    
    if(currentIndex > 4) {
        timerEl.style.display = "none";
           textEl.textContent = "ALL DONE! your score  is " + userScore + "!";
            answer1.style.display = "none";
            answer2.style.display = "none";
            answer3.style.display = "none";
            answer4.style.display = "none";
            initials.style.display = "block";
            initialsBtn.style.display = "block";
            playAgainBtn.style.display = "block";            
    }

    
    
};



function checkAnswer(e) {
e.preventDefault();
var userAnswer = e.target.id;
if(userAnswer !== questions[currentIndex].correctAnswer){
    
       yee.textContent = "WRONG!"; 
       timeLeft -=10;
       document.getElementById('timer').innerHTML= "Time: " + timeLeft + "seconds";
     
}   else {
    
    yee.textContent = "CORRECT!";
    
}
nextQuestion();

}

function storeScore () {
 console.log("did something right!");
}
 

