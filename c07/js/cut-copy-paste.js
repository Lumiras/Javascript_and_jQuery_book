$(function(){
    var $p = $('p');

    //create clone of <p> element and add after the <h2>
    var $clonedQuote = $p.clone();
    $p.remove();
    $clonedQuote.insertAfter('h2');

    var $moveItem = $('#one').detatch();
    $moveItem.appendTo('ul');
});
