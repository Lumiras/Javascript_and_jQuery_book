var randomNum = Math.floor((Math.random() * 100000000));

var el = document.getElementById('info');
el.innerHTML = '<h2>Random number: </h2><p>' + randomNum + '</p>';
