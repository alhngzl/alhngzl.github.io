$(document).ready(function(){
	$("#cart_page #cart #payment_info #card_number input").keyup(function(){

		if ($("#cart_page #cart #payment_info #card_show img").length == 0) {
			$("#cart_page #cart #payment_info #card_show").html('<img src="">');
		}

		if ($("#cart_page #cart #payment_info #card_number input").val()[0] == "4") {
			$("#cart_page #cart #payment_info #card_show img").attr("src", "img/visa_card.png");
		}else if ($("#cart_page #cart #payment_info #card_number input").val()[0] == "5"){
			$("#cart_page #cart #payment_info #card_show img").attr("src", "img/master_card.png");
		}else{
			$("#cart_page #cart #payment_info #card_show").html('');
		}
	});


	$("#sign_page #sign_area #sign_in #sign_in_action #sign_in_action_button").click(function(){
		$.post('db_check_member.php',
		{
			mail: $("#sign_page #sign_in #sign_mail input").val(),
			password: $("#sign_page #sign_in #sign_password input").val()

		},
		function(data, status){
			if(data[2] == "S"){
				alert(data + '\nYou will direct to Home Page');
				location.href = 'index.php';
			}else{
				alert(data);
			}
		});
	});

	$("#sign_page #sign_up_action_button").click(function(){
		$.post('db_add_member.php',
		{
			fullname: $("#sign_page #sign_up #sign_name input").val(),
			mail: $("#sign_page #sign_up #sign_mail input").val(),
			password: $("#sign_page #sign_up #sign_password input").val()

		},
		function(data, status){
			if(data[2] == "S"){
				alert(data + '\nYou will direct to Home Page');
				location.href = 'index.php';
			}else{
				alert(data);
			}
		});
	});

	$("#index_page .product .button").click(function(){
		var clickedButton = $(this);
		$.post('db_add_cart.php',
		{
			product_id: $(this).attr("value")

		},
		function(data, status){
			if(data[2] == "S"){
				$(clickedButton).html("Added");
				setTimeout(
					function(){
						$(clickedButton).html("Add To Cart");
					}, 500);
			}else if(data[0] == "C"){
				alert(data);
				location.href = 'sign.php';
			}else{
				alert(data);
			}
		});
	});



	$("#product_page .product .button").click(function(){
		var clickedButton = $(this);
		$.post('db_add_cart.php',
		{
			product_id: $(this).attr("value")

		},
		function(data, status){
			if(data[2] == "S"){
				$(clickedButton).html("Added");
				setTimeout(
					function(){
						$(clickedButton).html("Add To Cart");
					}, 500);
			}else if(data[0] == "C"){
				alert(data);
				location.href = 'sign.php';
			}else{
				alert(data);
			}
		});
	});

	$("#cart_page .product_delete button").click(function(){
		var clickedButton = $(this);
		$.post('db_del_cart.php',
		{
			product_id: $(this).attr("value")

		},
		function(data, status){
			if(data[2] == "S"){
				location.href = 'cart.php';
			}else if(data[0] == "C"){
				alert(data);
			}else{
				alert(data);
			}
		});
	});

	$("#cart_page #card_payment button").click(function(){
		var clickedButton = $(this);
		$.get('db_upd_cart.php',
		function(data, status){
			if(data[2] == "S"){
				location.href = 'cart.php';
			}else if(data[0] == "C"){
				alert(data);
			}else{
				alert(data);
			}
		});
	})
});