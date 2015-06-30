function checkUsername(){
    var username = el.value; //store username in var
    if(username.length<5){
        elMsg.className = 'warning';
        elMsg.textContent = 'Not long enough, yet...';
    } else {
        elMsg.textContent = '';
    }
}

function tipUsername() {
    elMsg.className = 'tip';
    elMsg.innerHTML = 'Username must be at least 5 characters';
}

var el = document.getElementById('username');
var elMsg = document.getElementById('feedback');

//when username input gains/loses focus call above functions:
el.addEventListener('focus', tipUsername, false);
el.addEventListener('blur', checkUsername, false);
