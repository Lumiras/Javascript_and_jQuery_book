var msg = 'Sign up to receive our newletter for 10% off!';
function updateMessage(){
    var el = document.getElementById('message');
    el.textContent = msg;
}

msg = "this can be redefined anywhere, right?";

updateMessage();

msg = 'not after update, though, right?';
