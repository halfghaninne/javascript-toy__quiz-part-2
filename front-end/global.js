window.onload = function(){

  var button = document.getElementById("begin_button");

  var questionTracker = 0;

  button.addEventListener("click", promptCall(questionTracker));

  // }); ends function block, ends EL args, ends EL


  function promptCall(questionTracker) {
    var request = new XMLHttpRequest;
    var path = "http://localhost:9292/question/" + questionTracker;
    request.open("GET", path);

    request.addEventListener("load", function(event) {
      prompt(event.target.responseText) //pseudo
    }) // ends function block, ends EL args, ends EL
    
    request.send();

    questionTracker += 1;

  }; // ends block, ends function prompt













}; // end windowonload.