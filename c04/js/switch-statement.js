var msg;
var level = 2;

switch (level) {
    case 1:
        msg = "Good luck on the first test!";
        break;

    case 2:
        msg = "Second of three, keep it going!";
        break;

    case 3:
        msg = "Last level, don't give up now!";
        break;
}

var el = document.getElementById('answer')
el.textContent = msg;
