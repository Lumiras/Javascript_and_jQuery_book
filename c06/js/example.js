var noteInput, noteName, textEntered, target; //all our variables

noteName = document.getElementById('noteName'); //element holding note
noteInput = document.getElementById('noteInput');

//now our functions...

function record(target) {
    target.setAttribute('data-state', 'record');
    target.textContent = 'record';
}

function stop(target) {
    target.setAttribute('data-state', 'stop');
    target.textContent = 'stop';
}

function writeLabel(e) {
    if (!e) { //if event object not present
        e = window.event; //use IE5-8 fallback
    }
    target = e.target || e.srcElement; //get target of event
    textEntered = target.value; //get value of element
    noteName.textContent = textEntered; //update note text
}

function recorderControls(e) {
    if(!e) {
        e = window.event;
    }
    target = e.target || e.srcElement;
    if(e.preventDefault) { //if you can accept preventDefault
        e.preventDefault(); //accept preventDefault!
    } else {
        event.returnValue = false; //IE fallback;
    }
}

switch(target.getAttribute('data-state')){ //get data-state value of target
    case 'record': //if the value is record
        record(target); //call the record() function
        break;
    case 'stop': //if the value is stop
        stop(target); //Call the stop() function
        break;

    //you could put more buttons here...
}

if (document.addEventListener){ //if event listener supported
    document.addEventListener('click', function(e) { //for any click in document
        recorderControls(e); //call recorderControls()
    }, false); //capture during bubble phase
    noteInput.addEventListener('input', writeLabel, false);
} else {
    document.attachEvent('onclick', function(e) { //IE fallback
        recorderControls(e); //calls recorderControls
    });
    noteInput.attachEvent('onkeyup', writeLabel);

}
