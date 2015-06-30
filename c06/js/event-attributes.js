function checkUsername(){
    var elMsg = document.getElementById('feedback');
    var elUsername = document.getElementById('username');
    if (elUsername.value.length<5){
        elMsg.textContent = "Username must be five characters or more in length";
    } else {
        elMsg.textContent = "";
    }
}
