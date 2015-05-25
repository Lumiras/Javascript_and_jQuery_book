var startItem = document.getElementsByTagName('ul')[0];
var firstItem = startItem.firstChild;
var lastItem = startItem.lastChild;

// firstItem.className = 'complete';
// lastItem.className = 'cool';

firstItem.setAttribute('class', 'complete');
lastItem.setAttribute('class', 'cool');

//the two above achieve the same thing;
