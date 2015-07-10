$(function(){

    //let's get some vars!
    var $list, $newItemForm, $newItemButton;
    var item = '';
    $list = $('ul');
    $newItemForm = $('#newItemForm');  //cache form to add new items
    $newItemButton = $('#newItemButton'); //cache button to show form

    $('li').hide().each(function(index){  //hide list items
        $(this).delay(450 * index).fadeIn(1600); //fade items in
    });

    //item counter
    function updateCount(){
        var items = $('li[class!=complete]').length; //number of not completed items in list
        $('#counter').text(items);
    }
    updateCount();

    //setup form for new items
    $newItemButton.show();
    $newItemForm.hide();
    $('#showForm').on('click', function(){
        $newItemButton.hide();
        $newItemForm.show();
    });

    //adding list item
    $newItemForm.on('submit', function(e){
        e.preventDefault();
        var text = $('input:text').val();
        $list.append('<li>' + text + '</li>');
        $('input:text').val('');
        updateCount();
    });

    //click handling!!!
    $list.on('click', 'li', function(){
        var $this = $(this);
        var complete = $this.hasClass('complete');

        if(complete === true){
            $this.animate({
                opacity: 0.0,
                paddingLeft: '+=180'
            }, 500, 'swing', function(){
                $this.remove();
            });
        } else {
            item = $this.text();
            $this.remove();
            $list
                .append('<li class=\"complete\">' + item + '</li>')
                .hide().fadeIn(300);
            updateCount();
        }
    });
});
