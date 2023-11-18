$(document).ready(function(){

	var faqArray;
	var mapsArray;
	var teacherArray;

	$.get("text/faq/faq.txt", function(data){
		faqArray = data.split("\n").filter(function(v){return v.charCodeAt()!==13});
		insertFaqArray(faqArray);
	});

	$.get("text/maps/maps.txt", function(data){
		mapsArray = data.split("\n").filter(function(v){return v.charCodeAt()!==13});
		insertMapsArray(mapsArray);
	});

	$.get("text/teacher/teacher.txt", function(data){
		teacherArray = data.split("\n").filter(function(v){return v.charCodeAt()!==13});
		insertTeacherArray(teacherArray);
	});

	$.get("text/contact/contact.txt", function(data){
		contactArray = data.split("\n").filter(function(v){return v.charCodeAt()!==13});
		insertContactArray(contactArray);
	});

	$.get("text/me/me.txt", function(data){
		meText = data;
		insertMeText(meText);
	});

});

function insertFaqArray(faqArray){
	var faqHtmlString = "";
	for(var i=0; i < faqArray.length; i+=2){
		faqHtmlString += '<div class="panel panel-default"><div class="panel-heading" role="tab" id="faq'+i+'"><h4 class="panel-title"><a role="button" data-toggle="collapse" data-parent="#accordion" href="#faqc'+i+'" aria-expanded="true" aria-controls="faqc'+i+'">'+faqArray[i].replace("T:", "")+'</a></h4></div><div id="faqc'+i+'" class="panel-collapse collapse" role="tabpanel" aria-labelledby="faq'+i+'"><div class="panel-body">'+faqArray[i+1].replace("A:", "")+'</div></div></div>';
	}
	$(".homePage .globalArea .more .itemContents .itemContent#faq #accordion").html(faqHtmlString);
}

function insertMapsArray(mapsArray){
	var mapsHtmlString = "";
	for(var i=0; i < mapsArray.length; i+=2){
		mapsHtmlString += '<div class="panel panel-default"><div class="panel-heading" role="tab" id="maps'+i+'"><h4 class="panel-title"><a role="button" data-toggle="collapse" data-parent="#accordion2" href="#mapsc'+i+'" aria-expanded="true" aria-controls="mapsc'+i+'">'+mapsArray[i].replace("T:", "")+'</a></h4></div><div id="mapsc'+i+'" class="panel-collapse collapse" role="tabpanel" aria-labelledby="maps'+i+'"><div class="panel-body">'+mapsArray[i+1].replace("A:", "")+'</div></div></div>';
	}
	$(".homePage .globalArea .more .itemContents .itemContent#maps #accordion2").html(mapsHtmlString);
}

function insertTeacherArray(teacherArray){
	var teacherHtmlString = "";
	for(var i=0; i < teacherArray.length; i+=2){
		teacherHtmlString += '<div class="panel panel-default"><div class="panel-heading" role="tab" id="teacher'+i+'"><h4 class="panel-title"><a role="button" data-toggle="collapse" data-parent="#accordion3" href="#teacherc'+i+'" aria-expanded="true" aria-controls="teacherc'+i+'">'+teacherArray[i].replace("T:", "")+'</a></h4></div><div id="teacherc'+i+'" class="panel-collapse collapse" role="tabpanel" aria-labelledby="teacher'+i+'"><div class="panel-body">'+teacherArray[i+1].replace("A:", "")+'</div></div></div>';
	}
	$(".homePage .globalArea .more .itemContents .itemContent#teacher #accordion3").html(teacherHtmlString);
}

function insertContactArray(contactArray){
	var contactHtmlString = '<tr><td> '+contactArray[0].replace("T:", "")+' :</td><td id="tel"> '+contactArray[1].replace("A:", "")+'</td></tr><tr><td> '+contactArray[2].replace("T:", "")+' :</td><td id="gsm"> '+contactArray[3].replace("A:", "")+'</td></tr><tr><td> '+contactArray[4].replace("T:", "")+' :</td><td id="mail"> '+contactArray[5].replace("A:", "")+' </td></tr>';
	
	$(".homePage .globalArea .contactPage .content table").html(contactHtmlString);
}

function insertMeText(meText){
	$(".homePage .globalArea .mePage .content p").html(meText);
}