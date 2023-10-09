// Define a class 'Question' with a constructor that initializes question and answer properties.
class Question {
    constructor(question, correctAnswer, incorrectAnswer1, incorrectAnswer2, incorrectAnswer3) {
        this.question = question;
        this.correctAnswer = correctAnswer;
        this.incorrectAnswer1 = incorrectAnswer1;
        this.incorrectAnswer2 = incorrectAnswer2;
        this.incorrectAnswer3 = incorrectAnswer3;
    }
}

// An array of 'Question' objects, using the 'scrambleArray' function to shuffle the questions.
let questions = scrambleArray([
    // Multiple questions with correct and incorrect answers.
    new Question("Which of the following best describes a Web API?",
    "Built into your web browser and contain methods that allow us to manipulate a web page via JavaScript.",
    "A part of the JavaScript language itself.",
    "Code that must be retrieved from somewhere on the Web.",
    "Low level code that directly control the computer's graphics functions."),
    new Question("Which of the following would change an element's background to red?",
    'element.setAttribute("style", "background-color: red");',
    'element.setAttribute("red");',
    'element.setAttribute("style", "red");',
    'element.setAttribute("class", "background: red");'),
    new Question("How would you append the following to the DOM? \n var myDiv = document.createElement('div')",
    'document.body.appendChild(myDiv);',
    'myDiv.appendChild.document.body;',
    'document.body.appendChild("div");',
    'document.body.appendChild = myDiv;'),
    new Question('What value would we add to setInterval() if we want a function called, myTimer() to run every 3 seconds?',
    'setInterval(myTimer, 3000)',
    'setInterval(myTimer, 3)',
    'setInterval(myTimer, 30)',
    'setInterval(myTimer, 300)'),
    new Question('Which attribute would we use to send an alert to the user when they click a specific element?',
    'onclick="alert(\'You clicked me.\')"',
    'ontoggle="alert(\'You clicked me.\')"',
    'onchange="alert(\'You clicked me.\')',
    'onclose="alert(\'You clicked me.\')"'),
    new Question('While creating a form for a client, you decide that you do not want the corresponding browser actions to happen, and you want to implement another behavior instead. What would you use to make this possible?',
    'event.preventDefault()',
    'event.dispatchEvent()',
    'event.stopAction()',
    'event.stopPropagation()'),
    new Question('You need to add an event listener to an element, pressEl, that checks to see if the element has been clicked and then runs myFunction(). Which of the following would you add to your code?',
    'pressEl.addEventListener("click", myFunction)',
    'addEventListener(pressEL, "mouseover", myFunction())',
    'addEventListener(pressEL, "click", myFunction)',
    'pressEl.addEventListener("keydown", myFunction())'),
    new Question('Where is data stored when it is persisted to local storage?',
    'In the client or browser.',
    'Under the Applications tab in Chrome Dev Tools.',
    'In the window called localStorage.',
    'In the database in the backend.'),
    new Question('Why do we need to convert an object into JSON in order for it to properly persist to local storage?',
    'Local storage can only store strings, so we convert the object to JSON to store it properly.',
    'Local storage cannot read JavaScript, so we convert JavaScript into JSON.',
    'Local storage only accepts JSON objects.',
    'It is convention to store objects using JSON, and we must follow that pattern so that our code is easy to read.'),
    new Question("You would like to set var classAttribute equal to an element's class attribute so that you can use the variable later in your code. Which of the following would accomplish this?",
    'var classAttribute = element.getAttribute("class");',
    'var classAttribute = element.setAttribute("class", "classAttribute);',
    'var classAttribute = element.removeAttribute("class);',
    'var classAttribute = element.setAttribute("class");'),
    new Question('You need to retrieve data with the key name of "formData" from local storage and convert it into an object. How would you accomplish this?',
    'var formData = JSON.parse(localStorage.getItem("formData"));',
    'var formData = JSON.stringify(localStorage.getItem("formData"));',
    'var formData = JSON.parse(localStorage.setItem("formData"));',
    'var formData = JSON.parse("formData");'),
    new Question("How often will myFunction execute based on the following code: setInterval(myFunction, 30);",
    'At least every 30 milliseconds',
    'Exactly every 30 milliseconds',
    'At least every 30 seconds',
    'Exactly every 30 seconds'),
    new Question("Which of the following is NOT an example of why we use client-side storage?",
    "It is best practice to use client-side storage to store sensitive information, like a user's payment information.",
    "It allows us to store the contents of a user's shopping cart from a previous session.",
    "We can use it to remember a user's preferences.",
    "It can allow a user to use a site without a network connection."),
    new Question("Inside the HTML document, where do you place your JavaScript code?",
    'Inside the script element',
    'Inside the link element',
    'In the footer element',
    'Inside the head element'),
    new Question('What operator is used to assign a value to a declared variable?',
    'Equal sign (=)',
    'Double-equal (==)',
    'Question mark (?)',
    'Colon (:)'),
    new Question('What are the six primitive data types in JavaScript?',
    'string, number, boolean, bigInt, symbol, undefined',
    'sentence, int, truthy, bigInt, symbol, undefined',
    'sentence, float, data, bigInt, symbol, undefined',
    'string, num, falsy, bigInt, symbol, undefined'),
    new Question('How do we declare a conditional statement in JavaScript?',
    'if...else',
    'while loop',
    'for loop',
    'difference...between'),
    new Question("From the given array which index is the letter 'b' on? ['a', 'b', 'c', 'd']",
    '1',
    '0',
    '2',
    '3'),
    new Question('How do we stop a loop from from repeating indefinitely?',
    'A loop will stop executing when the condition is false.',
    'We have to explicitly end the loop with the break keyword.',
    'A loop will stop executing when the condition is true.',
    'When we have iterated through half of the condition.'),
    new Question('Which statement is NOT true about functions in JavaScript?',
    'A function must always be assigned an identifier',
    'Functions are able to be recursive.',
    'Functions can receive arguments that can alter the output of a function',
    'Functions can be reused throughout your code'),
    new Question('What are the two types of scope JavaScript uses?',
    'Global and Local',
    'Surrounding and Inner',
    'Outside and Inside',
    'Abroad and Local'),
    new Question("Which array methods remove the last element of an array and add a new element to the beginning of an array?",
    'pop() and unshift()',
    'forEach() and pop()',
    'concat() and shift()',
    'push() and sort()'),
    new Question("How do we access a value stored in an object?",
    'Dot notation, Bracket notation',
    'Equal notation, Abstract notation',
    'Dot notation, Curl bracket notation',
    'Period notation, Square bracket notation'),
    new Question('What is an object method?',
    'A function associated with an object',
    'An array saved inside of an object',
    'Keys in an object that have a number assigned to it',
    'A function that takes an object for an argument'),
    new Question("What is the purpose of the 'This' operator?",
    "The keyword 'This' refers to the object it is in. 'This' changes based on which object it is in when being called.",
    "'This' keyword lets us make a reference to our window gives us access to special object methods.",
    "'This' is an array where we can easily store global variables for when we need access to them.",
    "'This' keyword allows us to specify certain variables to it which can be used in the global scope."),
    new Question('What will the following expression return: document.querySelector("#user-email")',
    'An Element with the id attribute of user-email',
    'A variable named #user-email',
    'A local storage key-value pair named #user-email',
    'An Element with the class attribute of user-email'),
    new Question("Which statement is NOT true about JavaScript?",
    'JavaScripts handles numbers better than most programming languages.',
    'JavaScript increases interactivity of our websites.',
    'JavaScript lets provide the user immediate feedback upon an action.',
    'Javascript allows developers to create richer interfaces for the users.'),
    new Question("Which of the following variables takes precedence over the others if the names are the same?",
    'The local element',
    'Global variable',
    'Both global and local elements',
    'None'),
    new Question("x === y implies that:",
    'Both are equal in the value and data type.',
    'Both x and y are equal in value, type and reference address as well.',
    'Both are x and y are equal in value only.',
    'Both are not same at all.'),
    new Question('Which line of code correctly check if the variable "a" is not equal the "NULL"',
    'if (a !== null)',
    'if (!a)',
    'if (a ! null)',
    'if (a != null)')
]);

// Define variables to store references to various DOM elements.
const quizIntro = document.querySelector(".intro");
const quizSection = document.querySelector(".quiz");
const endResults = document.querySelector(".results");
const startButton = document.querySelector(".start");
const choiceBtn1 = document.querySelector(".choice-1");
const choiceBtn2 = document.querySelector(".choice-2");
const choiceBtn3 = document.querySelector(".choice-3");
const choiceBtn4 = document.querySelector(".choice-4");
const feedback = document.querySelector(".feedback");
const scoreEl = document.querySelector(".score");
const highScoreEl = document.querySelector(".high-score");
const restartBtn = document.querySelector(".restart");

// Function to generate a random integer between 0 and 'max' (exclusive).
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// Function to shuffle an array using a copy of the original array.
function scrambleArray(array) {
    var copy = array.slice();
    var scrambledArray = [];

    while (copy.length > 0) {
        var randIndex = getRandomInt(copy.length);  // get random item in original array
        scrambledArray.push(copy[randIndex]);  // add it scrambled array
        copy.splice(randIndex, 1);  // delete random item from original array
    }

    return scrambledArray;
}

// Functions to show and hide DOM elements by adding/removing the "hide" class.
function showElement(element) {
    element.classList.remove("hide");
}
function hideElement(element) {
    element.classList.add("hide");
}

// Hide the quiz section and end results initially.
hideElement(quizSection);
hideElement(endResults);

// Function to start the quiz when the "Start" button is clicked.
function startQuiz() {
    hideElement(quizIntro);
    showElement(quizSection);
    displayQuestion();
    startTimer();
}

// Event listeners start assigned functions once clicked.
startButton.addEventListener("click", startQuiz);
highScoreEl.addEventListener("submit", submitScore);
restartBtn.addEventListener("click", restartQuiz);


// Variables for tracking the current question, feedback text, score, and leaderboard.
var currentQuestion = 0;
var feedbackText = '';
var score = 0;
var leaderboard = [];

// Function to display the current question and answer choices.
function displayQuestion() {
    var question = questions[currentQuestion];
    var questionElement = document.querySelector(".question");
    questionElement.textContent = question.question;
    var choices = scrambleArray([question.correctAnswer, question.incorrectAnswer1, question.incorrectAnswer2, question.incorrectAnswer3]);
    var answer1 = document.querySelector(".choice-1");
    answer1.textContent = choices[0];
    var answer2 = document.querySelector(".choice-2");
    answer2.textContent = choices[1];
    var answer3 = document.querySelector(".choice-3");
    answer3.textContent = choices[2];
    var answer4 = document.querySelector(".choice-4");
    answer4.textContent = choices[3];
    feedback.textContent = feedbackText;
}

// Event listeners to the answer choice buttons to handle user responses.
choiceBtn1.addEventListener("click", answerQuestion);
choiceBtn2.addEventListener("click", answerQuestion);
choiceBtn3.addEventListener("click", answerQuestion);
choiceBtn4.addEventListener("click", answerQuestion);

// Function to handle user's answer selection.
function answerQuestion(event) {
    var answer = event.target.textContent;
    var question = questions[currentQuestion];
    if (answer === question.correctAnswer) {
        feedbackText = "Correct!";
        score++;
    } else {
        feedbackText = "Incorrect!";
        timeLeft -= 10;
        displayTimer();
    }
    currentQuestion++;
    if (currentQuestion === 10) {
        endQuiz();
    } else {
        displayQuestion();
    }
}

// Function to end the quiz and display the final score and allow user to input initials.
function endQuiz() {
    hideElement(quizSection);
    showElement(endResults);
    scoreEl.textContent = score;
    clearInterval(timerInterval);
}

// Variables for the timer and set the initial time left to 120 seconds.
var timerInterval;
var timeLeft = 120;
var timerEl = document.querySelector(".time");

// Function to start the timer countdown and if the timer reaches 0, end the quiz.
function startTimer() {
    timeLeft = 120;
    timerInterval = setInterval(function() {
        timeLeft--;
        displayTimer();
        if (timeLeft === 0) {
            clearInterval(timerInterval);
            endQuiz();
        }
    }, 1000);
}

// Function to display the remaining time.
function displayTimer() {
    timerEl.textContent = timeLeft;
}

// Function to update the leaderboard with the user's score and initials.  
// The results are organized by score in descending order and stored in local storage.
function updateLeaderboard() {
    var storedLeaderboard = localStorage.getItem("leaderboard");
    if (storedLeaderboard) {
        leaderboard = JSON.parse(storedLeaderboard);
        leaderboard.sort(function(a, b) {
            return b.score - a.score;
        });
    }
    else {
        leaderboard = [];
    }
}

// Function to submit the user's initials and score to the leaderboard.
function submitScore(event) {
    event.preventDefault();
    var initials = document.querySelector("#initials").value;
    var scoreObj = {
        initials: initials,
        score: score
    };
    updateLeaderboard();
    leaderboard.push(scoreObj);
    localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
    displayLeaderboard();
}

// Function to display the leaderboard by creating a list.
function displayLeaderboard() {
    var leaderboardEl = document.querySelector(".leaderboard");
    leaderboardEl.innerHTML = "";
    updateLeaderboard();
    leaderboard.forEach(function(scoreObj) {
        var scoreItem = document.createElement("li");
        scoreItem.textContent = scoreObj.initials + " - " + scoreObj.score;
        leaderboardEl.appendChild(scoreItem);
    });
}

// Function to restart the quiz by hiding the end results and showing the quiz intro.
// This is displayed when the user finishes the quiz.
function restartQuiz() {
    hideElement(endResults);
    showElement(quizIntro);
    currentQuestion = 0;
    feedbackText = '';
    score = 0;
    timeLeft = 120;
    displayTimer();
    questions = scrambleArray(questions);
}

