<?php 
include 'pg_sessioninit.php';
?>
	<div class="row" id="navbar">
		<div class="col-md-5" id="title">Pick Your Style (PYS)</div>
		<div class="col-md-2"></div>
		<div class="col-md-5" id="group">
			<?php if ($_SESSION["sign_user"] == ""){ ?>
			<div class="row">
				<a href="index.php"><div class="col-md-3 item" id="home">Home</div></a>
				<a href="product.php"><div class="col-md-3 item" id="product">Proucts</div></a>
				<a href="sign.php"><div class="col-md-3 item" id="account">Account</div></a>
				<a href="sign.php"><div class="col-md-3 item" id="cart">Cart</div></a>
			</div>
			<?php }else{ ?>
				<div class="row">
				<a href="index.php"><div class="col-md-3 item" id="home">Home</div></a>
				<a href="product.php"><div class="col-md-3 item" id="product">Proucts</div></a>
				<a href="pg_sessiontruncate.php"><div class="col-md-3 item" id="account">Sign Off</div></a>
				<a href="cart.php"><div class="col-md-3 item" id="cart">Cart</div></a>
			</div>
			<?php } ?>
		</div>
	</div>

	<div id="line"></div>