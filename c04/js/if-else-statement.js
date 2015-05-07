var score = 50;
var pass = 75;
var msg;
if (score >= pass){
    msg = "Congrats, you did it!";
} else {
    msg = "Sorry, try again";
}

var elMsg = document.getElementById('answer');
elMsg.textContent = msg;
