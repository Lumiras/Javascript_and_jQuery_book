//Constructor syntax > var colors = [...] is prefered!
var colors = new Array('white', 'black', 'custom');

var el = document.getElementById('colors');
el.textContent = colors.item(1);

//that shows why!
//this is broken, but constructor syntax sucks anyway
