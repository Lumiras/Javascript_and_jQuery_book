var msg = '<p><b>Page title: </b>' + document.title + '<br />';
msg += '<b>page address: </b>' + document.URL + '<br />';
msg += '<b>last modified: </b>' + document.lastModified + '</p';

var el = document.getElementById('footer');
el.innerHTML = msg;
