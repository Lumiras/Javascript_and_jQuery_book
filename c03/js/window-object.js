var msg = '<h2>Broswer Window</h2><p>Width: ' + window.innerWidth + '</p>';
msg += '<p>height: ' + window.innerHeight + '</p>';
msg += '<h2>history</h2><p>items: ' + window.history.length + '</p>';
msg += '<h2>screen</h2><p>Width: ' + window.screen.width + '</p>';
msg += '<p>Height: ' + window.screen.height + '</p>';

var el = document.getElementById('info');
el.innerHTML = msg;

window.alert('Current page:' + window.location);
