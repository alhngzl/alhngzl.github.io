$(document).ready(function(){
	var defAnimateTime = 200;
	var selectedColor;
	var lastMouseFurniture;

	$(".subMenuA").click(function(){
		$("#colorBoard").css("height","0px");
		if($(this).attr("clicked") == "false"){
			closeSubMenuB($(this).attr("id"));
			$(this).attr("clicked", "true");
		}else{
			openSubMenuB($(this).attr("id"));
			$(this).attr("clicked", "false");			
		}
	});

	$(".subMenuB").hover(
		function(){
			var getId = $(this).attr("class").substring(9);
			moveColorSelector($(this).attr("class").substring(9),$(this).attr("id"));
			lastMouseFurniture = getId + "#" + $(this).attr("id");
		})

	$.each($(".subMenuB"), function(index, value){
		var currentId = $(value).attr("id");
		var parentClass = $(value).attr("class").substring(9);
		$(value).css("background-image", "url('img/furniture/" + parentClass + "/" + currentId + ".png')")
	})

	function openSubMenuB(clicked){
		$("." + clicked).stop().animate({height: "75px"}, defAnimateTime);
		$("#" + clicked + " .glyphicon-menu-right").css("transform", "rotate(90deg)");

	}
	function closeSubMenuB(clicked){
		$("#colorBoard").css("height", "0px");
		$("." + clicked).stop().animate({height: "0px"}, defAnimateTime);	
		$("#" + clicked + " .glyphicon-menu-right").css("transform", "rotate(0deg)");
	}
	function moveColorSelector(clickedClass, clickedId){
		/*$("#colorSelector").css("height", "0px").css("display","block").animate({height: "40px"}, defAnimateTime);*/
		var positionLeft = $("."+clickedClass+"[id="+clickedId+"]").position().left;
		var positionTop = $("."+clickedClass+"[id="+clickedId+"]").position().top;
		$("#colorBoard").css("height", "74px").css("top", positionTop + "px").css("left", positionLeft + "px");
		createColorSpectrum();
		selectColor();
	}
	function createColorSpectrum(){
		$("#spectrum").spectrum({
			move: function(tinycolor) { 
				selectedColor = tinycolor.toHexString();
			}
		});
	}

	function selectColor(){		
		$(".sp-choose").click(function(){
			var file = lastMouseFurniture.substring(lastMouseFurniture.indexOf("#")+1, lastMouseFurniture.length);
			var directory = lastMouseFurniture.substring(0, lastMouseFurniture.indexOf("#"))
			cretae3MFFurniture("3D/furniture/" + directory + "/" + file + ".stl", selectedColor, 0.05, 0, 0, 0);
			console.log("Mobilya Eklenecek:\nMobilya\t: " + lastMouseFurniture + "\nRenk\t: " + selectedColor);
		})
	}
})