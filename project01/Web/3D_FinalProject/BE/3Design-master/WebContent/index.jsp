<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<html>
<head>

<jsp:include page="head.jsp" />

<link href="css/signUser.css" rel='stylesheet' type='text/css' />
<script src="js/signUser.js"></script>

</head>
<body>

<div id="sign">
	<div class="row">
		<div id="sign_in" class="col-md-6">Giriş Yap</div>
		<div id="sign_up" class="col-md-6">Kayıt Ol</div>
	</div>
	<div class="row">
		<div class="col-md-12">
			<div id="sign_in_context">
				Email Adresiniz: 
				<br />
				<div class="sign_in_form_group" id="">
					<i class="glyphicon glyphicon-envelope"></i>
					<input type="email" id="user_mail" />
				</div>
				Parolanız: 
				<br /> 
				<div class="sign_in_form_group" id="">
					<i class="glyphicon glyphicon-lock"></i>
					<input type="password" id="user_password" /> 
				</div>
				<div id="sign_in_status" class="alert alert-success">Giriş Başarılı</div>
				<div id="sign_in_button">
					<i class="glyphicon glyphicon-triangle-right"></i> 
					Giriş Yap
				</div>
			</div>
			<div style="display: none;" id="sign_up_context">
				İsminiz:
				<div class="sign_up_form_group">
					<i class="glyphicon glyphicon-user"></i>
					<input type="text" id="user_name"/>
				</div>
				Soyisminiz:
				<div class="sign_up_form_group">
					<i class="glyphicon glyphicon-user"></i>
					<input type="text" id="user_surname" />
				</div>
				Email Adresiniz: 
				<br />
				<div class="sign_up_form_group" id="">
					<i class="glyphicon glyphicon-envelope"></i>
					<input type="email" id="user_mail" />
				</div>
				Parolanız: 
				<br /> 
				<div class="sign_up_form_group" id="">
					<i class="glyphicon glyphicon-lock"></i>
					<input type="password" id="user_password" /> 
				</div>
				Doğum Tarihiniz (İstatistik): 
				<br />
				<div class="sign_up_form_group" id="">
					<i class="glyphicon glyphicon-calendar"></i>
					<input type="text" id="user_date"/>
				</div>
				Cinsiyet (İstatistik):
				<br />
				<div class="sign_up_form_group" id"">					
					<i class="glyphicon glyphicon-apple"></i>
					<input type="text" id="user_gender" /> 
				</div>
				<div id="sign_up_status" class="alert alert-success">Kayıt Başarılı</div>
				<div id="sign_up_button">
					<i class="glyphicon glyphicon-edit"></i> 
					Kayıt Ol
				</div>
			</div>
		</div>
	</div>
</div>

</body>
</html>