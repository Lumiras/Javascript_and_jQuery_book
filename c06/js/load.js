function setup(){
    var textInput;
    textInput = document.getElementById('username'); //get username input
    textInput.focus(); //give username focus
}

window.addEventListener('load', setup, false); //when page loads call setup()


/* this allows the page to focus on the username field when the page loads. Otherwise, the page will just load with nothing focused */
