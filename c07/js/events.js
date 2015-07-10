$(function(){
    var ids = '';
    var $listItems = $('li');

    $listItems.on('mouseover click', function(){ //means it will trigger the class change even on mouseover or on click for mobile
        ids = this.id;
        $listItems.children('span').remove();
        $(this).append(' <span class="priority">' + ids + '</span>');
    });

    $listItems.on('mouseout', function(){
        $(this).children('span').remove();
    });
});
