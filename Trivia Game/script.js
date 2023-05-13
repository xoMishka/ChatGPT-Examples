// Define an array of questions and answers
var trivia = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "Madrid", "Rome", "London"],
      answer: "Paris"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Mars", "Venus", "Jupiter", "Saturn"],
      answer: "Mars"
    },
    // Add more questions here...
  ];
  
  var currentQuestion = 0; // Track the index of the current question
  var score = 0; // Track the user's score
  
  var questionElement = document.getElementById("question");
  var optionsElement = document.getElementById("options");
  var nextButton = document.getElementById("nextBtn");
  
  // Display the current question and its options
  function displayQuestion() {
    var currentTrivia = trivia[currentQuestion];
    questionElement.textContent = currentTrivia.question;
  
    // Clear options
    optionsElement.innerHTML = "";
  
    // Create radio buttons for options
    for (var i = 0; i < currentTrivia.options.length; i++) {
      var option = document.createElement("input");
      option.type = "radio";
      option.name = "answer";
      option.value = currentTrivia.options[i];
      option.id = "option" + i;
  
      var label = document.createElement("label");
      label.htmlFor = "option" + i;
      label.textContent = currentTrivia.options[i];
  
      optionsElement.appendChild(option);
      optionsElement.appendChild(label);
      optionsElement.appendChild(document.createElement("br"));
    }
  }
  
  // Check if the selected option is correct and update the score
  function checkAnswer() {
    var selectedOption = document.querySelector('input[name="answer"]:checked');
    if (selectedOption && selectedOption.value === trivia[currentQuestion].answer) {
      score++;
    }
  }
  
  // Move to the next question or end the game if there are no more questions
  function nextQuestion() {
    checkAnswer();
  
    if (currentQuestion < trivia.length - 1) {
      currentQuestion++;
      displayQuestion();
    } else {
      // End of game
      questionElement.textContent = "Game Over!";
      optionsElement.innerHTML = "Your score: " + score + " out of " + trivia.length;
      nextButton.disabled = true;
    }
  }
  
  // Event listener for the Next button
  nextButton.addEventListener("click", nextQuestion);
  
  // Start the game by displaying the first question
  displayQuestion();