var xhr=new XMLHttpRequest;xhr.onload=function(){for(var e=JSON.parse(xhr.responseText),n="",t=0;t<e.events.length;t++)n+='<div class="event">',n+='<img src="'+e.events[t].map+'" ',n+='alt="'+e.events[t].map+'" ',n+="<p><b>"+e.events[t].location+"</b><br />",n+=e.events[t].date+"</p>",n+="</div>";document.getElementById("content").innerHTML=n},xhr.open("GET","data/data.json",!0),xhr.send(null);