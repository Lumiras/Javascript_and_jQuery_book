function setup(){
    var textInput;
    textInput = document.getElementById('message');
    textInput.focus(); //make browser put text cursor inside textInput by default
}

window.addEventListener('DOMContentLoaded', setup, false); //Window, listen for the DOM to be Loaded. Upon that, run setup. Return false.

window.addEventListener('beforeunload', function(event){
    return 'You have changes that have not been saved!';
}, false); //Window, listen for the event beforeunload. Upon that, run this function to warn the user their changes have not been saved. Return false.
