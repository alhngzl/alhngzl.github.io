$(document).ready(function(){

	//DisplayNoneFisrtPage
	$(".panelSelected#signIn").css("display","none");
	$(".panelSelected #emailStatus span").css("display","none");
	$("#panelSelectSessionType .signButton#signUp").css("display","none");

	//Listeners
	$("#panelSelectSessionType .signButton").click(function(){toogleSign()});

	$.post("http://localhost:8081/3D_DragDropDesign/SignUp", {"alhngzl": "gzl"}, function(data){
		console.log(data);
	})
})

function toogleSign(){
	if($(".panelSelected#signIn").css("display")=="none"){
		$(".panelSelected#signIn").css("display","block");
		$(".panelSelected#signUp").css("display","none");
		$("#panelSelectSessionType .signButton#signIn").css("display","none");
		$("#panelSelectSessionType .signButton#signUp").css("display","block");
	}else{
		$(".panelSelected#signIn").css("display","none");
		$(".panelSelected#signUp").css("display","block");
		$("#panelSelectSessionType .signButton#signIn").css("display","block");
		$("#panelSelectSessionType .signButton#signUp").css("display","none");
	}
}