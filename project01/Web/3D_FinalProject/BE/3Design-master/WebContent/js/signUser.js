$(document).ready(function(){
	$("#sign_up").click(function(){
		$("#sign_in").css("background-color", "#f4f4f4").css("border-top", "solid 5px transparent");
		$("#sign_in_context").css("display","none");		
		$("#sign_up").css("background-color", "transparent").css("border-top", "solid 5px #d66075");
		$("#sign_up_context").css("display","block");
		$("#sign").animate({marginTop: "-320px"},250);
	});
	$("#sign_in").click(function(){
		$("#sign_in").css("background-color", "transparent").css("border-top", "solid 5px #d66075");
		$("#sign_in_context").css("display","block");		
		$("#sign_up").css("background-color", "#f4f4f4").css("border-top", "solid 5px transparent");
		$("#sign_up_context").css("display","none");
		$("#sign").animate({marginTop: "-212px"},250);
	});
	$("#sign_in_button , #sign_up_button")
	.mousedown(function(){
		$(this).css("border-bottom-color", "transparent").css("margin-top", "22px");
	})
	.mouseup(function(){
		$(this).css("border-bottom-color", "#bf4760").css("margin-top", "20px");
	})
})