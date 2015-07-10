$(function(){
    var $newItemButton = $('#newItemButton');
    var $newItemForm = $('#newItemForm');
    var $textInput = $('input:text');

    $newItemButton.show();
    $newItemForm.hide();

    $('#showForm').on('click', function(){
        $newItemForm.show();
        $newItemButton.hide();
    });

    $newItemForm.on('submit', function(e){
        e.preventDefault();
        var newText = $textInput.val();
        $('li:last').after('<li>' + newText + '</li>');
        $newItemForm.hide();
        $newItemButton.show();
        $textInput.val('');
    });
});
