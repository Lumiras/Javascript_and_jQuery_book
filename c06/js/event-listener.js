function checkUsername(){
    var elMsg = document.getElementById('feedback');
    if(this.value.length<5){
        elMsg.textContent = "username must be more than 5 characters";
    }else{
        elMsg.textContent = '';
    }
}

var elUsername = document.getElementById('username');
//when focus is lost call checkUsername();
elUsername.addEventListener('blur', checkUsername, false);
