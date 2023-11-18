$(document).ready(function(){
	$("#designs, #info, #settings, #status").click(function(){
		var selected_context_id = "#" + $(this).attr("id") + "_context";
		$(".profile_context").css("display","none");
		$(selected_context_id).css("display", "block");
		
		$(".profile_titles_title").css("background-color","#f4f4f4").css("border-top","solid 5px transparent");
		$(this).css("background-color","#ffffff").css("border-top","solid 5px #d66075");
		
		if(selected_context_id == "#info_context"){
			$("#profile").animate({height: "410px"}, 250)
		}
		if(selected_context_id == "#designs_context"){
			$("#profile").animate({height: "585px"}, 250)
		}
		if(selected_context_id == "#settings_context"){
			$("#profile").animate({height: "500px"}, 250)
		}
		if(selected_context_id == "#status_context"){
			alert("İstatislik");
		}
	})
})