var scores = [24, 36, 19];
var arrayLength = scores.length;
var roundNumber = 0;  //current round number
var msg = '';
var i;

for (i=0; i < arrayLength; i++){
    roundNumber = (i + 1);
    msg += "Round " + roundNumber + ": ";
    msg += scores[i] + "<br />";
}


document.getElementById('answer').innerHTML = msg;
