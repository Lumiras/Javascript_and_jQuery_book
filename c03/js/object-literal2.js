var hotel = {
    name : 'Park Avenue Suites',
    rooms : 120,
    booked: 90,
    checkAvailability : function(){
        return this.rooms - this.booked;
    }
};

var elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

var elRooms = document.getElementById('rooms');
elRooms.textContent = hotel.checkAvailability();
