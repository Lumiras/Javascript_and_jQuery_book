$(function(){var a=$("h2");$("ul").hide(),a.append('<a class="show">show</a>'),a.on("click",function(){a.next("ul").fadeIn(500).children(".hot").addClass("complete"),a.find("a").fadeOut()})});