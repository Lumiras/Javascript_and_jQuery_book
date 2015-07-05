var elList, addLink, newEl, newText, counter, listItems;

elList = document.getElementById('list');
addLink = document.querySelector('a');
counter = document.getElementById('counter');

function addItem(e){
    e.preventDefault(); //preventing default link action on 'add list item button'
    newEl = document.createElement('li'); //create new li at document level
    newText = document.createTextNode('New List Item'); //create new text node with placeholder text
    newEl.appendChild(newText); //add newText to newEl
    elList.appendChild(newEl); //add newEl to existing elList
}

function updateCount(){
    listItems = document.getElementsByTagName('li').length; //count number of li elements on page
    counter.innerHTML = listItems; //simply print integer value of listItems
}

addLink.addEventListener('click', addItem, false); /*listen for a click on addLink located on any <a>, upon that event occuring run the fucnction addItem, return false*/

elList.addEventListener('DOMNodeInserted', updateCount, false); //elList, listen for a DOM node to be inserted. When it happens, run the fucntion updateCount. Return false.
