$(function(){
    $('li').on('click', function(){
        $(this).animate({
            opacity: 0.5,
            paddingLeft: '+=90'
        }, 500, function(){
            $(this).animate({
                opacity: 0.0,
                paddingLeft: '-=180'
            }, 500, function(){
            $(this).remove();
            });
        });
    });
});
