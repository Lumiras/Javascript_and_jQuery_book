$(function(){function e(){var e=$("li[class!=complete]").length;$("#counter").text(e)}var t,n,i,o="";t=$("ul"),n=$("#newItemForm"),i=$("#newItemButton"),$("li").hide().each(function(e){$(this).delay(450*e).fadeIn(1600)}),e(),i.show(),n.hide(),$("#showForm").on("click",function(){i.hide(),n.show()}),n.on("submit",function(n){n.preventDefault();var i=$("input:text").val();t.append("<li>"+i+"</li>"),$("input:text").val(""),e()}),t.on("click","li",function(){var n=$(this),i=n.hasClass("complete");i===!0?n.animate({opacity:0,paddingLeft:"+=180"},500,"swing",function(){n.remove()}):(o=n.text(),n.remove(),t.append('<li class="complete">'+o+"</li>").hide().fadeIn(300),e())})});