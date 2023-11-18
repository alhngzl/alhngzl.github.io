$("#selectionPalette").spectrum({
	change: function(color){
		UserSelectedFurniture.material.color.r = color.toRgb().r / 255;
		UserSelectedFurniture.material.color.g = color.toRgb().g / 255;
		UserSelectedFurniture.material.color.b = color.toRgb().b / 255;
	}
});
function ClickProcess(){
	console.log("clickEnable");
	$(".subMenuB img").click(function(){
		thisImg = this;
		addFunitureToScene(thisImg);
	})
}
$(document).ready(function(){
	var intvl = setInterval(function(){
		if($(".subMenuB img").length > 0){
			ClickProcess();
			$(".waiting").animate({height: "0px"}, 250, function(){$(".waiting").css("display","none");});
			clearInterval(intvl);
		}
	}, 1000);
	
/*
	DragDropPutModel FIXME-FIXME-FIXME-
	var thisImg;
	var downEvent = 0;
	//$('img').on('dragstart', function(event) { event.preventDefault(); });

	$(".subMenuB img").mousedown(function(){
		downEvent = 1;
		thisImg = this;
		console.log("--> : " + thisImg);
	});

	$("#designArea").mouseup(function(){
		if(downEvent == 1){
			addFunitureToScene(thisImg);
			downEvent = 0;
		}
	});
	
	$(".subMenuB img").mouseup(function(){
		if(downEvent == 1){
			addFunitureToScene(thisImg);
			downEvent = 0;
		}
	});
	*/
	
})
