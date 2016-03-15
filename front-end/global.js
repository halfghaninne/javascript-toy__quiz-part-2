window.onload = function(){

  var submit = document.getElementById("submitter");
  var questionDiv = document.getElementById("question");
  var choicesDiv = document.getElementById("choices");
  var userAnswer = document.getElementById("answer");
  var questionResultDiv = document.getElementById("question_result");
  var next = document.getElementById("next");
  var userTotalDiv = document.getElementById("total_result");
  
  var questionTracker = 0;
  var userTotal = 0;
  var questionsTotal = 0;
  questionsTotal = getQuestionCount();

  // gets number of questions from database
  function getQuestionCount() {
    var request = new XMLHttpRequest;
    request.open("GET", "http://localhost:9292/questions");
    request.addEventListener("load", function(event) {
      questionsTotal = event.target.responseText;
      debugger;
    }); //
    request.send();
  }; // ends getQuestionCount function def

  // makes XHR to get the question
  function getQuestionPrompt() {
    var request = new XMLHttpRequest;
    var path = "http://localhost:9292/question/" + questionTracker;
    // String interpolation was giving me headaches here. How can I do that instead of concatenation?
    request.open("GET", path);

    request.addEventListener("load", function(event) {
      // formatting issue; leave it for now.
      questionDiv.innerHTML = event.target.responseText;
    }); //ends function block, ends EL args, ends EL

    request.send();
      
  }; // ends getQuestionPrompt function definition

  // makes XHR to check user input against db
  function compareAnswer() {
    var request = new XMLHttpRequest;
    var path = "http://localhost:9292/question/" + questionTracker + "/" + userAnswer.value;

    request.open("GET", path);

    request.addEventListener("load", function(event) {
      questionResultDiv.innerHTML = event.target.responseText;
      if (event.target.responseText == 'Success!') {
        userTotal ++;
      };
      userTotalDiv.innerHTML = userTotal + " of " + questionsTotal + " questions right!"
    }); //ends function block, ends EL args, ends EL

    request.send();
  }; //ends compareAnswer function

  getQuestionPrompt();

  //test function
  function someFunction() {
    alert("clicked!");
  };

   // when answerRequest loads
  function moveForward() {
    userAnswer.value = "";
    questionResultDiv.innerHTML = "";
    questionTracker++;
    getQuestionPrompt();
  };

  submit.addEventListener("click", compareAnswer);

  next.addEventListener("click", moveForward);




 


//   button.addEventListener("click", function() {
//     var request = new XMLHttpRequest;
//     var path = "http://localhost:9292/question/" + questionTracker;
//     // String interpolation was giving me headaches here. How can I do that instead of concatenation?
//     request.open("GET", path);

//     request.addEventListener("load", function(event) {
//       var userAnswer = prompt(event.target.responseText)
//       var answerRequest = new XMLHttpRequest;
//       var answerPath = "http://localhost:9292/question/" + questionTracker + "/" + userAnswer;

//       answerRequest.open("GET", answerPath);

//       answerRequest.addEventListener("load", function(event) {
//         //if user says ok next question, then increment questionTracker and repeat process.
//         if (window.confirm(event.target.responseText + "  Next question?")) { 
//           questionTracker += 1;
//           var nextRequest = new XMLHttpRequest;
//           var nextPath = "http://localhost:9292/question/" + questionTracker;
//           nextRequest.open("GET", nextPath);

//           nextRequest.addEventListener("load", function(event) {
//             prompt(event.target.responseText)
//           }); //ends function block, ends EL args, ends EL

//           nextRequest.send();
//         } // ends if statement
//       }); //ends function block, ends EL args, ends EL

//       answerRequest.send();


//     }) // ends function block, ends EL args, ends EL
    
//     request.send();

//     // questionTracker += 1;

//   }); // ends function block, ends EL args, ends EL



}; // end windowonload.