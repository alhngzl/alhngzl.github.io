$(document).ready(function(){
	$(".homePage .navbar .blockategories .categories").click(function(){
		var target = "." + $(this).attr("id") + "Page";
		CategoriesToPage(target);
	});

	$(".homePage .globalArea .more .items .item").click(function(){
		OpenItem(this);
	});

	$(".homePage .globalArea .more .itemContents .itemContent .exit").click(function(){
		CloseItem();
	});

	$(".homePage .globalArea .galleryPage .content .container #sliderScreen .carousel-inner").click(function(){
		var target = ".homePage .globalArea .galleryPage .content .container #sliderScreen";
		if($(target).css("position")=="fixed"){
			SmallerGallerySlide(target);
		}else{
			BiggerGallerySlide(target);
		}
	});

	$(".homePage .navbar .logo").click(function(){
		CategoriesToPage(".homePage");
	});
});

/************************************/

function BiggerGallerySlide(target){
	$(target).css({"position":"fixed", "z-index":"99", "width":"660px", "top":"70px", "left":"50%", "margin-left":"-330px"});
}
function SmallerGallerySlide(target){
	$(target).css({"position":"", "top":"", "left":"", "margin-left":"", "width":""});
}
/************************************/

function OpenItem(target){	
	var clickedId = $(target).attr("id");
	$(".homePage .globalArea .more .itemContents .itemContent#" + clickedId).css("display", "block");
	$(".homePage .globalArea .more .itemContents").css("display", "block").animate({top: "80px"}, 500);
}
function CloseItem(){	
	$(".homePage .globalArea .more .itemContents").animate({top: "-550px"}, 500, function(){
		$(".homePage .globalArea .more .itemContents").css("display", "none");
		$(".homePage .globalArea .more .itemContents .itemContent").css("display", "none")
	});
}
/***************************************/
function CategoriesToPage(target){
	var targetTop = $(".globalArea").scrollTop() + $(target).offset().top - 65 + "px";
	if(target.indexOf("home") != -1){
		$(".globalArea").stop().animate({scrollTop: 0}, 500);
	}
	else{
		$(".globalArea").stop().animate({scrollTop: targetTop}, 500);
	}
}
