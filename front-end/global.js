window.onload = function(){

  ///////////////////////// VARIABLES /////////////////////////

  var submit = document.getElementById("submitter");
  var questionDiv = document.getElementById("question");
  var choicesDiv = document.getElementById("choices");
  var userAnswer = document.getElementById("answer");
  var questionResultDiv = document.getElementById("question_result");
  var next = document.getElementById("next");
  var userTotalDiv = document.getElementById("total_result");
  
  var questionTracker = 0;
  var userTotal = 0;
  var questionsTotal = getQuestionCount();

  /////////////////////////////////////////////////////////////

  ///////////////////////// FUNCTIONS /////////////////////////

  function getQuestionCount() {
    var request = new XMLHttpRequest;

    request.open("GET", "http://localhost:9292/questions");

    request.addEventListener("load", function(event) {
      questionsTotal = event.target.responseText;
    }); //ends function block, ends EL args, ends EL

    request.send();
  }; // ends getQuestionCount function def


  function getQuestionPrompt() {
    var request = new XMLHttpRequest;
    var path = "http://localhost:9292/question/"+questionTracker;
    // String interpolation was giving me headaches here. Is concatenation the best/only way?

    request.open("GET", path);

    request.addEventListener("load", function(event) {
       questionDiv.innerText = event.target.responseText;
    }); //ends function block, ends EL args, ends EL

    request.send();  
  }; // ends getQuestionPrompt function definition


  function getQuestionAnswers() {
    var request = new XMLHttpRequest;
    var path = "http://localhost:9292/question/"+questionTracker+"/answers";

    request.open("GET", path);

    request.addEventListener("load", function(event) {
       choicesDiv.innerHTML = event.target.responseText;
    }); //ends function block, ends EL args, ends EL

    request.send();
      
  }; // ends getQuestionPrompt function definition


  function compareAnswer() {
    var request = new XMLHttpRequest;
    var path = "http://localhost:9292/question/"+questionTracker+"/answers/"+ userAnswer.value;

    request.open("GET", path);

    request.addEventListener("load", function(event) {
      questionResultDiv.innerHTML = event.target.responseText;

      if (event.target.responseText == 'Success!') {
        userTotal ++;
      }; // ends if block

      userTotalDiv.innerHTML = userTotal+" of "+questionsTotal+" questions right!"
    }); // ends function block, ends EL args, ends EL

    request.send();
  }; //ends compareAnswer function

  // fired when answerRequest loads
  function moveForward() {
    userAnswer.value = "";
    questionResultDiv.innerHTML = "";
    questionTracker++;
    getQuestionPrompt();
  }; // ends moveForward function

  /////////////////////////////////////////////////////////////

  /////////////////// SET DOM FOR GAME PLAY ///////////////////

  getQuestionPrompt();
  getQuestionAnswers();

  submit.addEventListener("click", compareAnswer);

  next.addEventListener("click", moveForward);

  /////////////////////////////////////////////////////////////