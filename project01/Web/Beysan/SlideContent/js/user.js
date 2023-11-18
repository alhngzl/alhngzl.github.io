$(document).ready(function(){

	for (var i = 0; i < $(".element").size(); i+=2) {
		$("#footer table tbody #line1").append("<td>" + $($(".element")[i]).html() + "<td>");
	}
	for (var i = 1; i < $(".element").size(); i+=2) {
		$("#footer table tbody #line2").append("<td>" + $($(".element")[i]).html() + "<td>");
	}

	$(".element").click(function(){
		var setTextContent = $(this).html() + " için yazılan metin";
		var setTextTitle = $(this).html();
		$("#title").animate({opacity: 0.1}, 500, function(){
			$("#title").html(setTextTitle);
			$("#title").animate({opacity: 1}, 500);
		})
		$("#text").animate({opacity: 0.1}, 500, function(){
			$("#text").html(setTextContent);
			$("#text").animate({opacity: 1}, 500);
		})
	})
})