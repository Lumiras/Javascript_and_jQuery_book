var score1=8,score2=8,pass1=6,pass2=pass1,minPass=score1>=pass1&&score2>=pass2,msg="Resit required: "+!minPass,el=document.getElementById("answer");el.textContent=msg;