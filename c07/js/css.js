$(function(){
    var backgroundColor = $('li').css('background-color');

    $('ul').append('<p>Color was: ' + backgroundColor + '</p>');

    $('li').css({
        'background-color' : '#c5a996',
        'border' : '3px solid #fff',
        'padding-left' : '+=75',
        'text-shadow' : 'none'
    });
});
