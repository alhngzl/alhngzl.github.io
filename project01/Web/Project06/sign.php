<!DOCTYPE html>
<html>
<?php include 'pg_default.php'; ?>
<body id="sign_page">
<?php include 'pg_navbar.php'; ?>

	<div class="row" id="sign_area">
		<h6 id="sign_title">Sign In & Up</h6>
		<div class="col-md-5" id="sign_in">
			<div class="row form_input" id="sign_mail">
				<div class="col-md-12">
					<div class="input-group">
						<span class="input-group-addon glyphicon glyphicon-envelope" id="basic-addon1"></span>
						<input type="text" class="form-control" placeholder="Mail Address" aria-describedby="basic-addon1">
					</div>
				</div>
			</div>
			<div class="row form_input" id="sign_password">
				<div class="col-md-12">
					<div class="input-group">
						<span class="input-group-addon glyphicon glyphicon-lock" id="basic-addon1"></span>
						<input type="password" class="form-control" placeholder="Password" aria-describedby="basic-addon1">
					</div>
				</div>
			</div>
			<div class="row form_input" id="sign_in_action">
				<div class="col-md-12">
					<a id="sign_in_action_button" type="button" class="btn btn-success">Sign In</a>
				</div>
			</div>
		</div>
		<div class="col-md-2"></div>
		<div class="col-md-5" id="sign_up">
			<div class="row form_input" id="sign_name">
				<div class="col-md-12">
					<div class="input-group">
						<span class="input-group-addon glyphicon glyphicon-user" id="basic-addon1"></span>
						<input type="text" class="form-control" placeholder="Full Name" aria-describedby="basic-addon1" name="fullname">
					</div>
				</div>
			</div>

			<div class="row form_input" id="sign_mail">
				<div class="col-md-12">
					<div class="input-group">
						<span class="input-group-addon glyphicon glyphicon-envelope" id="basic-addon1"></span>
						<input type="mail" class="form-control" placeholder="Mail Address" aria-describedby="basic-addon1" name="mail">
					</div>
				</div>
			</div>
			<div class="row form_input" id="sign_password">
				<div class="col-md-12">
					<div class="input-group">
						<span class="input-group-addon glyphicon glyphicon-lock" id="basic-addon1"></span>
						<input type="password" class="form-control" placeholder="Password" aria-describedby="basic-addon1" name="password">
					</div>
				</div>
			</div>
			<div class="row form_input" id="sign_up_action">
				<div class="col-md-12">
					<a id="sign_up_action_button" type="button" class="btn btn-success">Sign Up</a>
				</div>
			</div>
		</div>
	</div>
</div>
</body>
</html>