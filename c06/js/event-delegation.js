function getTarget(e) {
    if(!e){
        e = window.event;
    }
    return e.target || e.srcElement;
}

function itemDone(e){
    //remove item from list
    var target, elParent, elGrandparent;
    target = getTarget(e);
    elParent = target.parentNode;
    elGrandparent = target.parentNode.parentNode;
    elGrandparent.removeChild(elParent);

    //prevent clicking on link link from taking you elsewhere
    if(e.preventDefault){
        e.preventDefault();
    }else{
        e.returnValue = false;
    }
}

var el = document.getElementById('shoppingList');
if(el.addEventListener){
    el.addEventListener('click', function(e) {
    itemDone(e);
}, false);
} else {
    el.attachEvent('onclick', function(e){
        itemDone(e);
    })
}
