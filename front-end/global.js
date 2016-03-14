window.onload = function(){

  var button = document.getElementById("begin_button");

  var questionTracker = 0;

  button.addEventListener("click", function(event){
    promptCall(questionTracker);

  }); // ends function block, ends EL args, ends EL


  function promptCall(questionTracker) {
    request = new XMLHttpRequest;
    request.open("GET", "localhost:9292/question/{questionTracker}");

    request.addEventListener("load", function(event) {
      prompt(event.target.responseText) //pseudo
    }) // ends function block, ends EL args, ends EL
    
    questionTracker += 1;

  }; // ends block, ends function prompt













};