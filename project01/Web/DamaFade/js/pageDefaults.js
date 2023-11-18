$(document).ready(function(){

	var defaultMarginLeft = $(".main").width() + "px";
	var defaultMarginTop = $(".main").height() + "px";

	$("#list").css("margin-left", "0px").css("margin-top","0px");
	$("#urun").css("margin-left", defaultMarginLeft);
	$("#kullanici").css("margin-left", defaultMarginLeft).css("margin-top", defaultMarginTop);
	$("#satis").css("margin-top", defaultMarginTop);

	var listButtonHeight = $(".list_button").height() + "px";

	$(".list_button").css("line-height", listButtonHeight);

	var urunButtonHeight = $(".urun_button");
	$.each(urunButtonHeight, function(index, value){
		var lineHeight = $(value).height() + "px";
		$(value).css("line-height", lineHeight);
	});

	var kullaniciButtonHeight = $(".kullanici_button");
	$.each(kullaniciButtonHeight, function(index, value){
		var lineHeight = $(value).height() + "px";
		$(value).css("line-height", lineHeight);
	});

	var satisButtonHeight = $(".satis_button");
	$.each(satisButtonHeight, function(index, value){
		var lineHeight = $(value).height() + "px";
		$(value).css("line-height", lineHeight);
	});
});