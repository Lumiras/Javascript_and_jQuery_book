var i = 1;
var msg = '';

//store 5 times table in a variable
do {
    msg += i + ' x 5 =' + (i*5) + "<br />";
    i++;
} while (i < 1);

document.getElementById('answer').innerHTML = msg;
