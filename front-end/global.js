window.onload = function(){

  var button = document.getElementById("begin_button");

  var questionTracker = 0;

  button.addEventListener("click", function() {
    var request = new XMLHttpRequest;
    var path = "http://localhost:9292/question/" + questionTracker;
    // String interpolation was giving me headaches here. How can I do that instead of concatenation?
    request.open("GET", path);

    request.addEventListener("load", function(event) {
      userAnswer = prompt(event.target.responseText)
      var answerRequest = new XMLHttpRequest;
      var answerPath = "http://localhost:9292/question/" + questionTracker + "/" + userAnswer;

      answerRequest.open("GET", answerPath);

      answerRequest.addEventListener("load", function(event) {
        alert(event.target.responseText);
      }); //ends function block, ends EL args, ends EL

      answerRequest.send();


    }) // ends function block, ends EL args, ends EL
    
    request.send();

    // questionTracker += 1;

  }); // ends function block, ends EL args, ends EL
















}; // end windowonload.