$(document).ready(function(){
    $(".unfinished").click(function(){
        $(this).toggleClass("unfinished");
        $(this).toggleClass("finished", 100).text("Done!");
    });

});
