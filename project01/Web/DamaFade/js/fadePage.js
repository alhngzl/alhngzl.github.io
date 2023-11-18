$(document).ready(function(){

	var defaultMarginLeft = $(".main").width() + "px";
	var defaultMarginTop = $(".main").height() + "px";

	$("#list").css("margin-left", "0px").css("margin-top","0px");
	$("#urun").css("margin-left", defaultMarginLeft);
	$("#kullanici").css("margin-left", defaultMarginLeft).css("margin-top", defaultMarginTop);
	$("#satis").css("margin-top", defaultMarginTop);

	$("#urun_button").click(function(){
		$("#list").animate({marginLeft: "-" + defaultMarginLeft}, 1000);
		$("#urun").animate({marginLeft: "0px"}, 1000);
	});

	$("#kullanici_button").click(function(){
		$("#list").animate({marginLeft: "-" + defaultMarginLeft, marginTop: "-" + defaultMarginTop}, 1000);
		$("#kullanici").animate({marginLeft: "0px", marginTop: "0px"}, 1000);
	});

	$("#satis_button").click(function(){
		$("#list").animate({marginTop: "-" + defaultMarginTop}, 1000);
		$("#satis").animate({marginTop: "0px"}, 1000);
	});

	$(".geri").click(function(){
		$("#list").animate({marginLeft: "0px", marginTop: "0px"}, 1000);
		$("#urun").animate({marginLeft: defaultMarginLeft}, 1000);
		$("#kullanici").animate({marginLeft: defaultMarginLeft, marginTop: defaultMarginTop}, 1000);
		$("#satis").animate({marginTop: defaultMarginTop}, 1000);
	});
});