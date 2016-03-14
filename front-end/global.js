window.onload = function(){

  var submit = document.getElementById("submitter");
  var questionDiv = document.getElementById("question");
  var choicesDiv = document.getElementById("choices");
  var userAnswerDiv = document.getElementById("answer");
  var questionResultDiv = document.getElementById("question_result");
  var next = document.getElementById("next");
  var userTotalDiv = document.getElementById("total_result");
  
  var questionTracker = 0;
  var userTotal = 0;

  // makes XHR to get the question
  function getQuestionPrompt() {
    var request = new XMLHttpRequest;
    var path = "http://localhost:9292/question/" + questionTracker;
    // String interpolation was giving me headaches here. How can I do that instead of concatenation?
    request.open("GET", path);

    request.addEventListener("load", function(event) {
      questionDiv.innerHTML = event.target.responseText;
    }); //ends function block, ends EL args, ends EL

    request.send();
      
  }; // ends function definition

  getQuestionPrompt();

  // // makes XHR to check user input against db
  // function compareAnswer(event) {

  // }; 

  // // when answerRequest loads, puts up a confirm box
  // function moveForward(event) {

  // }


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