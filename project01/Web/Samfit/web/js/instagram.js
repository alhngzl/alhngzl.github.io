
var instagramDataArray;
var instagramImgDataArray = [];
$(document).ready(function(){
	$.get("instagram.json", function(data){

		instagramDataArray = data.items.slice(0,16);
		$.each(instagramDataArray, function(index, value){
			instagramImgDataArray.push(value.images.standard_resolution.url);
		});

		var instagramImgDataHtml = "";
		for(var i=0; i < 16; i++){
			instagramImgDataHtml+='<li class="col-sm-3"><a class="thumbnail" id="carousel-selector-'+i+'"><img src="'+instagramImgDataArray[i]+'"></a></li>';
		}

		var instagramImgDataHtml2 = "";
		instagramImgDataHtml2+='<div class="active item" data-slide-number="0"><img src="'+instagramImgDataArray[0]+'"></div>';
		for(var i=1; i < 16; i++){
			instagramImgDataHtml2+='<div class="item" data-slide-number="'+i+'"><img src="'+instagramImgDataArray[i]+'"></div>';
		}

		$(".homePage .globalArea .galleryPage .content .container #slider-thumbs ul").html(instagramImgDataHtml);
		$(".homePage .globalArea .galleryPage .content .container #sliderScreen .carousel-inner").html(instagramImgDataHtml2);
		
		/***********         SLIDER PROCESS         *********/
		$('#myCarousel').carousel({
			interval: 3000
		});

		$('[id^=carousel-selector-]').click(function () {
			var id_selector = $(this).attr("id");
			try {
				var id = /-(\d+)$/.exec(id_selector)[1];
				jQuery('#myCarousel').carousel(parseInt(id));
			} catch (e) {
				console.log('Regex failed!', e);
			}
		});

		$('#myCarousel').on('slid.bs.carousel', function (e) {
			var id = $('.item.active').data('slide-number');
			$('#carousel-text').html($('#slide-content-'+id).html());
		});
		/***********--------- SLIDER PROCESS ----------*********/
	});
})