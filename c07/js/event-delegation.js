$(function(){
    var listItem, itemStatus, eventType, itemClass;

    $('ul').on(
        'click mouseover || mouseout',
        ':not(#four)',
        {status: 'important'},
        function(e) {
            $(this).toggleClass('cool');
            listItem = 'Item: ' + e.target.textContent + '<br />';
            itemStatus = 'Status: ' + e.data.status + '<br />';
            eventType = 'Event Type: ' + e.type + '<br />';
            itemClass = 'Class: ' + e.class + '<br />';
            $('#notes').html(listItem + itemStatus + eventType + itemClass);
        }
    );
});
