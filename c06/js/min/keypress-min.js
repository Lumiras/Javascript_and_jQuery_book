function charCount(e){var t,n,a,d;t=document.getElementById("message").value,n=document.getElementById("charactersLeft"),a=180-t.length,n.textContent=a,d=document.getElementById("lastKey"),d.textContent="Last key in ASCII code: "+e.keyCode}var el;el=document.getElementById("message"),el.addEventListener("keypress",charCount,!1);