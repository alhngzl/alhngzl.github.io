<%@page import="com.alhngzl.dao.UserProcess"%>
<%@page import="com.alhngzl.dao.IpProcess"%>
<%@ page
language="java"
contentType="text/html; charset=UTF-8"
pageEncoding="UTF-8"%>
<%@ page import="com.alhngzl.model.*" %>
<%@ page import="java.net.URLDecoder" %>
<%@ page import="java.util.*" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<jsp:include page="head.jsp" />
	<link href="css/admin.css" rel='stylesheet' type='text/css' />
	<script type="text/javascript" src="js/admin.js"></script>
</head>
<body>

<%
Cookie[] cookies = request.getCookies();
User user = new User();

for(int n=0; n < cookies.length; n++)
		{
	if(cookies[n].getName().equals("id")){
		user.setId(Integer.valueOf(cookies[n].getValue()));
	}
	if(cookies[n].getName().equals("mail")){
		user.setMail(cookies[n].getValue());
	}
	if(cookies[n].getName().equals("name")){
		user.setName(URLDecoder.decode(cookies[n].getValue(), "UTF-8"));
	}
	if(cookies[n].getName().equals("admin")){
		if(cookies[n].getValue().equals("false")){
			response.sendRedirect("design/index.jsp");
		}
	}
}

ArrayList<String> caps = new ArrayList<String>(IpProcess.SelectIp());



double numberM = UserProcess.SelectCount("E");
double numberW = UserProcess.SelectCount("K");

double rateM = numberM / (numberM+numberW) * 100.0;
double rateW = numberW / (numberM+numberW) * 100.0;

double numberMIp = IpProcess.SelectCount("E");
double numberWIp = IpProcess.SelectCount("K");

double rateMIp = numberMIp / (numberMIp + numberWIp) * 100.0;
double rateWIp = numberWIp / (numberMIp + numberWIp) * 100.0;


ArrayList<Integer> years0015 = new ArrayList<Integer>(UserProcess.SelectDate(0, 15));
ArrayList<Integer> years1625 = new ArrayList<Integer>(UserProcess.SelectDate(16, 25));
ArrayList<Integer> years2635 = new ArrayList<Integer>(UserProcess.SelectDate(26, 35));
ArrayList<Integer> years3645 = new ArrayList<Integer>(UserProcess.SelectDate(36, 45));
ArrayList<Integer> years4655 = new ArrayList<Integer>(UserProcess.SelectDate(46, 55));
ArrayList<Integer> years5665 = new ArrayList<Integer>(UserProcess.SelectDate(56, 65));
ArrayList<Integer> years6699 = new ArrayList<Integer>(UserProcess.SelectDate(66, 999));

ArrayList<Integer> time = new ArrayList<Integer>(IpProcess.SelectTime());
double morningNumber = 0;
double noonNumber = 0;
double eveningNumber = 0;
double nightNumber = 0;
double alltimeNumber = time.size();
for(int i = 0; i < time.size(); i++){
	if(time.get(i) >= 4 && time.get(i) < 10){morningNumber++;}
	if(time.get(i) >= 10 && time.get(i) < 16){noonNumber++;}
	if(time.get(i) >= 16 && time.get(i) < 22){eveningNumber++;}
	if(time.get(i) >= 22 || time.get(i) < 04){nightNumber++;}
}
%>


<div class="container">
	<div class="mail-box">
		<aside class="sm-side">
			<div class="user-head">
				<div class="user-name">
					<h5><%= user.getName() %></h5>
					<span><%= user.getMail() %></span>
				</div>
			</div>
			<div class="inbox-body">
				<a href="design/index.jsp" data-toggle="modal"  title="Compose"    class="btn btn-compose">
					Tasarım Sayfası
				</a>
			</div>
			<ul class="inbox-nav inbox-divider">
				<li class="active">
					<a class="adminLabels" id="IpStatus" href="#"><i class="glyphicon glyphicon-map-marker"></i> Girilen Adresler</a>
				</li>
				<li>
					<a class="adminLabels" id="GenderStatus" href="#"><i class="glyphicon glyphicon-apple"></i> Cinsiyet Analizi</a>
				</li>
				<li>
					<a class="adminLabels" id="AgeStatus" href="#"><i class="glyphicon glyphicon-plus"></i> Yaş Analizi</a>
				</li>
				<li>
					<a class="adminLabels" id="TimeStatus" href="#"><i class="glyphicon glyphicon-time"></i> Saat Analizi </a>
				</li>
				<li>
					<a class="adminLabels" id="AddFurniture" href="#"><i class="glyphicon glyphicon-lamp"></i> Mobilya Ekle </a>
				</li>
			</ul>

		</aside>
		<aside class="lg-side">
			<div class="inbox-head">
				<h3 id="adminHead">Girilen Adresler</h3>
			</div>
			<div class="inbox-body">


				<div id="IpStatusTable" class="row">
					<div class="panel panel-primary filterable">
						<div class="panel-heading">
							<h3 class="panel-title">Girilen Adresler</h3>
							<div class="pull-right">
								<button class="btn btn-default btn-xs btn-filter"><span class="glyphicon glyphicon-filter"></span> Filter</button>
							</div>
						</div>
						<table class="table">
							<thead>
								<tr class="filters">
									<th><input type="text" class="form-control" placeholder="Kullanıcı Numarası" disabled></th>
									<th><input type="text" class="form-control" placeholder="İsim Soyisim" disabled></th>
									<th><input type="text" class="form-control" placeholder="İp Adresi" disabled></th>
								</tr>
							</thead>
							<tbody>
								<% for(int i = 0; i < caps.size(); i+=3){ %>
								<tr>
									<td><%= caps.get(i) %></td>
									<td><%= caps.get(i+1) %></td>
									<td><%= caps.get(i+2) %></td>
								</tr>
								<% } %>
							</tbody>
						</table>
					</div>
				</div>
				<div id="GenderStatusTable" class="row">
					<div class="panel panel-primary filterable">
						<div class="panel-heading">
							<h3 class="panel-title">Cinsiyet Analizi - Üye Sayısı </h3>
							<div class="pull-right">
								<button class="btn btn-default btn-xs btn-filter"><span class="glyphicon glyphicon-filter"></span> Filter</button>
							</div>
						</div>
						<table class="table">
							<thead>
								<tr class="filters">
									<th><input type="text" class="form-control" placeholder="Erkek Sayısı" disabled></th>
									<th><input type="text" class="form-control" placeholder="Kadın Sayısı" disabled></th>
									<th><input type="text" class="form-control" placeholder="Erkek Oranı" disabled></th>
									<th><input type="text" class="form-control" placeholder="Kadın Oranı" disabled></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td><%= (int) numberM %></td>
									<td><%= (int) numberW %></td>
									<td><div class="progress"><div class="progress-bar" role="progressbar" aria-valuenow="<%= String.format("%.2f", rateM) %>" aria-valuemin="0" aria-valuemax="100" style="width: <%= rateM %>%;"><%= String.format("%.2f", rateM) %>%</div></div></td>
									<td><div class="progress"><div class="progress-bar" role="progressbar" aria-valuenow="<%= String.format("%.2f", rateW) %>" aria-valuemin="0" aria-valuemax="100" style="width: <%= rateW %>%;"><%= String.format("%.2f", rateW) %>%</div></div></td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div id="GenderStatusTable" class="row">
					<div class="panel panel-primary filterable">
						<div class="panel-heading">
							<h3 class="panel-title">Cinsiyet Analizi - Giriş Sayısı</h3>
							<div class="pull-right">
								<button class="btn btn-default btn-xs btn-filter"><span class="glyphicon glyphicon-filter"></span> Filter</button>
							</div>
						</div>
						<table class="table">
							<thead>
								<tr class="filters">
									<th><input type="text" class="form-control" placeholder="Erkek Sayısı" disabled></th>
									<th><input type="text" class="form-control" placeholder="Kadın Sayısı" disabled></th>
									<th><input type="text" class="form-control" placeholder="Erkek Oranı" disabled></th>
									<th><input type="text" class="form-control" placeholder="Kadın Oranı" disabled></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td><%= (int) numberMIp %></td>
									<td><%= (int) numberWIp %></td>
									<td><div class="progress"><div class="progress-bar" role="progressbar" aria-valuenow="<%= String.format("%.2f", rateMIp) %>" aria-valuemin="0" aria-valuemax="100" style="width: <%= rateMIp %>%;"><%= String.format("%.2f", rateMIp) %>%</div></div></td>
									<td><div class="progress"><div class="progress-bar" role="progressbar" aria-valuenow="<%= String.format("%.2f", rateWIp) %>" aria-valuemin="0" aria-valuemax="100" style="width: <%= rateWIp %>%;"><%= String.format("%.2f", rateWIp) %>%</div></div></td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div id="AgeStatusTable" class="row">
					<div class="panel panel-primary filterable">
						<div class="panel-heading">
							<h3 class="panel-title">Yaş Analizi</h3>
							<div class="pull-right">
								<button class="btn btn-default btn-xs btn-filter"><span class="glyphicon glyphicon-filter"></span> Filter</button>
							</div>
						</div>
						<table class="table">
							<thead>
								<tr class="filters">
									<th><input type="text" class="form-control" placeholder=" < 15" disabled></th>
									<th><input type="text" class="form-control" placeholder="16 - 25" disabled></th>
									<th><input type="text" class="form-control" placeholder="26 - 35" disabled></th>
									<th><input type="text" class="form-control" placeholder="36 - 45" disabled></th>
									<th><input type="text" class="form-control" placeholder="46 - 55" disabled></th>
									<th><input type="text" class="form-control" placeholder="56 - 65" disabled></th>
									<th><input type="text" class="form-control" placeholder=" 65 >" disabled></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td><%= years0015.size() %></td>
									<td><%= years1625.size() %></td>
									<td><%= years2635.size() %></td>
									<td><%= years3645.size() %></td>
									<td><%= years4655.size() %></td>
									<td><%= years5665.size() %></td>
									<td><%= years6699.size() %></td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div id="TimeStatusTable" class="row">
					<div class="panel panel-primary filterable">
						<div class="panel-heading">
							<h3 class="panel-title">Saat Analizi</h3>
							<div class="pull-right">
								<button class="btn btn-default btn-xs btn-filter"><span class="glyphicon glyphicon-filter"></span> Filter</button>
							</div>
						</div>
						<table class="table">
							<thead>
								<tr class="filters">
									<th><input type="text" class="form-control" placeholder="Sabah (04.00 - 10.00)" disabled></th>
									<th><input type="text" class="form-control" placeholder="Öğle (10.00 - 16.00)" disabled></th>
									<th><input type="text" class="form-control" placeholder="Akşam (16.00 - 22.00)" disabled></th>
									<th><input type="text" class="form-control" placeholder="Gece (22.00 - 04.00)" disabled></th>
									<th><input type="text" class="form-control" placeholder="Toplam Giriş Sayısı" disabled></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td><div class="progress"><div class="progress-bar" role="progressbar" aria-valuenow="<%= String.format("%.2f", (morningNumber/alltimeNumber)*100.0) %>" aria-valuemin="0" aria-valuemax="100" style="width: <%= (morningNumber/alltimeNumber)*100.0 %>%;"><%= String.format("%.2f", (morningNumber/alltimeNumber)*100.0) %>%</div></div></td>
									<td><div class="progress"><div class="progress-bar" role="progressbar" aria-valuenow="<%= String.format("%.2f", (noonNumber/alltimeNumber)*100.0) %>" aria-valuemin="0" aria-valuemax="100" style="width: <%= (noonNumber/alltimeNumber)*100.0 %>%;"><%= String.format("%.2f", (noonNumber/alltimeNumber)*100.0) %>%</div></div></td>
									<td><div class="progress"><div class="progress-bar" role="progressbar" aria-valuenow="<%= String.format("%.2f", (eveningNumber/alltimeNumber)*100.0) %>" aria-valuemin="0" aria-valuemax="100" style="width: <%= (eveningNumber/alltimeNumber)*100.0 %>%;"><%= String.format("%.2f", (eveningNumber/alltimeNumber)*100.0) %>%</div></div></td>
									<td><div class="progress"><div class="progress-bar" role="progressbar" aria-valuenow="<%= String.format("%.2f", (nightNumber/alltimeNumber)*100.0) %>" aria-valuemin="0" aria-valuemax="100" style="width: <%= (nightNumber/alltimeNumber)*100.0 %>%;"><%= String.format("%.2f", (nightNumber/alltimeNumber)*100.0) %>%</div></div></td>
									<td><%= (int) alltimeNumber %></td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div id="AddFurnitureTable" class="row">
					
				</div>
			
			</div>

			</aside>
		</div>
</div>

</body>
</html>