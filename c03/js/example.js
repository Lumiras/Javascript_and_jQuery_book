/* this script is placed inside an immediately invoked function expression which helps protect the scope of variables */

(function(){
    //part one: create hotel object and write out offer details
    var hotel = {
        name :     'Park Hills Suites',
        roomRate : 240, //in dollars
        discount:  15,
        offerPrice : function(){
            var offerRate = this.roomRate * ((100 - this.discount) / 100);
            return offerRate;
        }
    };

    //write out hotel name, standard rate and special rate
    var hotelName, roomRate, specialRate; //declare vars

    hotelName   = document.getElementById('hotelName'); //get our elements
    roomRate    = document.getElementById('roomRate');
    specialRate = document.getElementById('specialRate');

    hotelName.textContent = hotel.name; //write hotel name
    roomRate.textContent = "$" + hotel.roomRate.toFixed(2); //write room rate
    specialRate.textContent = "$" + hotel.offerPrice(); //write offer price


    //part two, calculate and write out expiry details for the offer

    var expiryMsg;
    var today;
    var elEnds;

    function offerExpires(today){
        //declare variables within function fo local scope
        var weekFromToday, day, date, month, year, dayNames, monthNames;
        // add 7 days time (in milliseconds)
        weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
        //create arrays to hold hames of days/months
        dayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        //collect parts of the date to show on the page
        day = dayNames[weekFromToday.getDay()];
        date = weekFromToday.getDate();
        month = monthNames[weekFromToday.getMonth()];
        year = weekFromToday.getFullYear();

        //create the message
        expiryMsg  = 'Offer expires next ';
        expiryMsg += day + '<br />(' + date + ' ' + month + ' ' + year +')';
        return expiryMsg;
    }

    today = new Date();
    elEnds = document.getElementById('offerEnds');
    elEnds.innerHTML = offerExpires(today);

    }());
