var score = 75;
var msg = '';

function congratulations(){
    msg += 'Congratulations! You did it! ';
}

if (score >= 50){
    congratulations();
    msg += 'Move on to the next round!';
}

var el = document.getElementById("answer");
el.innerHTML = msg;
