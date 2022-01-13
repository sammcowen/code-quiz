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
var questions = [
    {
        "questionNum": 1,
        "questionText":"1.Which of the following functions of Array object extracts a section of an array and returns a new array?",
        "answerOptions":['a.splice()',
            'b.slice()',
            'c.push()',
            'd. none of the above'],
        "correctAnswer": "b.slice()"
    },
    // {
    //     "questionNum": 2,
    //     "questionText": "2.Which is a type of pop up box in Javascript?",
    //     "answerOptions": ['a. prompt',
    //         'b. alert',
    //         'c. confirm',
    //         'd. all of the above'],
    //     "correctAnswer": answerOptions[3]
    // },
    // {
    //     "questionNum": 3,
    //     "questionText": "3.Which data type returns a value of true or false?",
    //     "answerOptions": ['a. Boolean',
    //         'b. string',
    //         'c. number', 
    //         'd. null'],
    //     "correctAnswer": answerOptions[0]
    // },
    // {
    //     "questionNum": 4,
    //  "questionText": "4. How do you call/invoke a function named myFunction?",
    // "answerOptions": ['a. myFunction = function',
    //     'b. myFunction();',
    //     'c. var myFunction= function();' ,
    //     'd. none of the above'],
    // "correctAnswer": answerOptions[1]

    // },
    // {
    //     "questionNum": 5,
    //     "questionText":"5. Which of the following is the proper syntax for an Array?",
    //     "answerOptions":[
    //         'a. var fruits = ["apples","bananas", "oranges"];',
    //         'b. var fruits = {apples, bananas, oranges};',
    //         'c. var fruits = (1: apples, 2: bananas, 3: oranges);',
    //         'd. none of the above'],
    //         "correctAnswer": answerOptions[0]
       

    // }

];



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
    textEl.textContent = questions[currentIndex].questionText ;
    answer1.textContent = questions[currentIndex].answerOptions[0]; 
    answer2.textContent = questions[currentIndex].answerOptions[1];
    answer3.textContent = questions[currentIndex].answerOptions[2];
    answer4.textContent = questions[currentIndex].answerOptions[3];
    

  
};
