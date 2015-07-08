$(function(){
    $('li').each(function(){   //creates loop that iterates over all li elements in page
        var ids = this.id;  //as loop runs, creates new variable with the ID of the element as it is passed through
        $(this).append(' <span class="order">' + ids + '</span>');
    });
});

//note that jQuery creates an object containing all li elements and puts them in an array with a name (one, two, three)
