var price = 5, quantity = 14;
//using single declaration instead ^, this is sloppy looking! Best to declare vars on separate lines!!!
//var quantity = 14;
var total = price * quantity;
var message = "Your total is:";

var el = document.getElementById('cost');
el.textContent = message + ' '+'$' + total;
