$(document).ready(function(){
	$("#sign_up_button").click(function(){
		var name = $("#sign_up_context #user_name").val();
		var surname = $("#sign_up_context #user_surname").val();
		var date = $("#sign_up_context #user_date").val();
		var gender = $("#sign_up_context #user_gender").val().toUpperCase();
		var mail = $("#sign_up_context #user_mail").val();
		var password = $("#sign_up_context #user_password").val();
		
		if(name=="" || surname=="" || mail=="" || password==""){
			$("#sign_up_status").css("display", "block").attr("class","alert alert-danger").html("Boş Bırakılan Kısımlar Var.");
		}else{
			if(date.length == 10 && date.charAt(2)=='-' && date.charAt(5)=='-'){
				if(gender=="E" || gender=="K" || gender==""){
					$.post("LogUp", {name: name, surname: surname, date: date, gender: gender, mail: mail, password: password}, function(data){
						if(data == "OK"){
							$("#sign_up_status").css("display", "block").attr("class", "alert alert-success").html("Kayıt Başarılı");
						}else if(data == "ERROR"){
							$("#sign_up_status").css("display", "block").attr("class","alert alert-danger").html("Kayıt Başarısız<br />Mail Kullanılıyor Olabilir.");
						}
					})
				}else{
					$("#sign_up_status").css("display", "block").attr("class","alert alert-danger").html("Cinsiyet E veya K Yazın.");
				}
			}else{
				$("#sign_up_status").css("display", "block").attr("class","alert alert-danger").html("Tarih gg-aa-yyyy Formatında Olmalı");
			}
		}
	})
	
	$("#sign_in_button").click(function(){
		var mail = $("#sign_in_context #user_mail").val();
		var password = $("#sign_in_context #user_password").val();
		
		$.post("LogIn", {mail: mail, password: password}, function(data){
			if(data == "OK"){
				$("#sign_in_status").css("display", "block").attr("class", "alert alert-success").html("Giriş Başarılı");
				window.location.replace("admin.jsp");
			}else if(data == "ERROR"){
				$("#sign_in_status").css("display", "block").attr("class","alert alert-danger").html("Giriş Başarısız<br />Mail ile Parola Eşleşmiyor.");
			}
		})
	})
	
	
})