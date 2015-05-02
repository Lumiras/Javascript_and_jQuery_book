var hotel = new Object();

hotel.name = 'Quay';
hotel.rooms = 60;
hotel.booked = 47;
hotel.checkAvailability = function(){
    return this.rooms - this.booked;
};

var elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

var elRooms = document.getElementById('rooms');
elRooms.textContent = hotel.checkAvailability();
