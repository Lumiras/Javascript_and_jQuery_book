$(function(){var t=$("#newItemButton"),n=$("#newItemForm"),e=$("input:text");t.show(),n.hide(),$("#showForm").on("click",function(){n.show(),t.hide()}),n.on("submit",function(i){i.preventDefault();var o=e.val();$("li:last").after("<li>"+o+"</li>"),n.hide(),t.show(),e.val("")})});