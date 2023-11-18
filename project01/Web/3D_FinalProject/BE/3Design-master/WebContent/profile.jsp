<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>

<jsp:include page="head.jsp" />

<link href="css/profileUser.css" rel='stylesheet' type='text/css' />
<script src="js/profileUser.js"></script>

</head>
<body>

	<div id="profile">
		<div class="row" id="profile_titles">
			<div class="col-md-3 profile_titles_title" id="designs">
				Tasarımlar
			</div>
			<div class="col-md-3 profile_titles_title" id="info">
				Bilgiler
			</div>
			<div class="col-md-3 profile_titles_title" id="settings">
				Ayarlar
			</div>
			<div class="col-md-3 profile_titles_title" id="status" >
				İstatislikler
			</div>
		</div>
		
		<!--  -->
		<div class="row profile_context" id="designs_context">
			<div class="row" id="design_last_new">
				<div class="col-md-6">
					<div id="design_last">
						<i class="glyphicon glyphicon-repeat"></i>&nbsp;
						En Son Tasarımı Aç
					</div>
				</div>
				<div class="col-md-6">
					<div id="design_new">
						<i class="glyphicon glyphicon-plus"></i>&nbsp;
						Yeni Tasarım Oluştur
					</div>
				</div>
			</div>
			
			<br />
			
			<div id="design_history_title">
				Yapılan Tasarımlar
			</div>
			
			<% for(int i = 0; i < 5; i++){ %>
			<!-- HISTORY LOOP -->
			<div class="row" id="design_history">
				<div class="col-md-10">
					<div class="row" id="designs_history_title">
						<div class="col-md-6">Tasarım Adı</div>
						<div class="col-md-6">Tasarım Tarihi</div>
					</div>
					<div class="row" id="designs_history_info">
						<div class="col-md-6">Meşe Evleri Salon</div>
						<div class="col-md-6">02 Mayıs 2015</div>
					</div>
				</div>
				<div class="col-md-2">
					<div id="design_open_button"><i class="glyphicon glyphicon-search"></i> Göster</div>
				</div>
			</div>
			<!-- HISTORY LOOP -->
			<% } %>
			<div class="designs_context_pages">
				<% for(int i = 1; i < 5; i++){ %>
				<a href=""><%= i %></a>
				<% } %>
			</div>
		</div>
		<!--  -->
		<div style="display: none;" class="row profile_context" id="info_context">
			<div class="row">
				<div class="col-md-6" id="info_user_name">
					İsminiz: 
					<br />
					<div class="info_form_group" id="">
						<i class="glyphicon glyphicon-user"></i>
						<input type="text" id="info_user_name"/>
					</div>
				</div>
				<div class="col-md-6" id="info_user_mail">
					Email Adresiniz: 
					<br />
					<div class="info_form_group" id="">
						<i class="glyphicon glyphicon-envelope"></i>
						<input type="email" id="info_user_mail" />
					</div>
				</div>
			</div> 
			<div class="row">
				<div class="col-md-6" id="info_user_surname">
					Soyisminiz: 
					<br />
					<div class="info_form_group" id="">
						<i class="glyphicon glyphicon-user"></i>
						<input type="text" id="info_user_surname" />
					</div>
				</div>
				<div class="col-md-6" id="info_user_name">
					Doğum Tarihiniz: 
					<br />
					<div class="info_form_group" id="">
						<i class="glyphicon glyphicon-calendar"></i>
						<input type="date" id="info_user_born"/>
					</div>
				</div>
			</div> 
			<div class="row">
				<div class="col-md-4"></div>
				<div class="col-md-4 info_buttons">
					<div id="info_admin_button"><i class="glyphicon glyphicon-text-background"></i> Admin</div>
				</div>
				<div class="col-md-4"></div>
			</div>
			<div class="row">
				<div class="col-md-4"></div>
				<div class="col-md-4 info_buttons">
					<div id="info_update_button"><i class="glyphicon glyphicon-refresh"></i> Güncelle</div>
				</div>
				<div class="col-md-4"></div>
			</div> 
		</div>
		<!--  -->
		<div style="display: none;" class="row profile_context" id="settings_context">
			<div class="row">
				<div class="col-md-4"></div>
				<div class="col-md-4">
					Eski Parolanız: 
					<br /> 
					<div class="settings_form_group" id="">
						<i class="glyphicon glyphicon-lock"></i>
						<input type="password" id="settings_oldpassword" /> 
					</div>
				</div>
				<div class="col-md-4"></div>
			</div>
			<div class="row">
				<div class="col-md-4"></div>
				<div class="col-md-4">
					Yeni Parolanız: 
					<br /> 
					<div class="settings_form_group" id="">
						<i class="glyphicon glyphicon-lock"></i>
						<input type="password" id="settings_newpassword" /> 
					</div>
				</div>
				<div class="col-md-4"></div>
			</div>
			<div class="row">
				<div class="col-md-4"></div>
				<div class="col-md-4">
					Yeni Parolanız Tekrar: 
					<br /> 
					<div class="settings_form_group" id="">
						<i class="glyphicon glyphicon-lock"></i>
						<input type="password" id="settings_renewpassword" /> 
					</div>
				</div>
				<div class="col-md-4"></div>
			</div>
			<div class="row">
				<div class="col-md-4"></div>
				<div class="col-md-4">
					<div id="change_password_button"><i class="glyphicon glyphicon-retweet"></i> Şifre Değiştir</div>
				</div>
				<div class="col-md-4"></div>
			</div>
		</div>
		<!--  -->
		<div style="display: none;" class="row profile_context" id="status_context">
			İSTATİSLİK İÇERİĞİ
		</div>
		<!--  -->
	</div>

</body>
</html>