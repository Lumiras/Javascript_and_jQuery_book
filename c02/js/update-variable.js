var inStock = true;
var shipping = false;

//some other processing may go on here, changing the status of 'shipping' from true to false

inStock = false;
shipping = true;

var elStock = document.getElementById('stock');
elStock.className = inStock;
var elShip = document.getElementById('shipping');
elShip.className = shipping;
