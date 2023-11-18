<!DOCTYPE html>
<html>
<?php include 'pg_default.php'; ?>
<body id="cart_page">
<?php include 'pg_navbar.php'; ?>
<?php
include 'db_get_cart.php';
$db_result = getAllCart();
?>

	<div class="row" id="cart">
		<h6 id="product_title">Products</h6>
		<div class="col-md-6" id="product_list">

			<?php while($row = mysqli_fetch_array($db_result)){ ?>
			<div class="row product">
				<div class="col-md-2 product_img"><img src=<?php echo '"'.$row['product_image'].'"' ?>></div>
				<div class="col-md-6 product_name"><?php echo $row['product_name'] ?></div>
				<div class="col-md-2 product_amount">$ <?php echo $row['product_amount'] ?></div>
				<div class="col-md-2 product_delete"><button class="btn btn-default" type="submit"value=<?php echo '"'.$row['product_id'].'"' ?>> <span class="glyphicon glyphicon-trash" aria-hidden="true"></span></button></div>
			</div>
			<?php } ?>
		</div>
		<div class="col-md-1"></div>
		<div class="col-md-5" id="payment_info">
			<div class="row form_input" id="card_name">
				<div class="col-md-12">
					<div class="input-group">
						<span class="input-group-addon glyphicon glyphicon-user" id="basic-addon1"></span>
						<input type="text" class="form-control" placeholder="Card's Owner" aria-describedby="basic-addon1">
					</div>
				</div>
			</div>
			<div class="row form_input" id="card_number">
				<div class="col-md-12">
					<div class="input-group">
						<span class="input-group-addon glyphicon glyphicon-credit-card" id="basic-addon1"></span>
						<input type="text" class="form-control" placeholder="Card Number" aria-describedby="basic-addon1">
					</div>
				</div>
			</div>
			<div class="row form_input" id="card_lastdate">
				<div class="col-md-12">
					<div class="input-group">
						<span class="input-group-addon glyphicon glyphicon-calendar" id="basic-addon1"></span>
						<input type="text" class="form-control" placeholder="Last Avaible Date" aria-describedby="basic-addon1">
					</div>
				</div>
			</div>
			<div class="row form_input" id="card_code">
				<div class="col-md-12">
					<div class="input-group">
						<span class="input-group-addon glyphicon glyphicon-lock" id="basic-addon1"></span>
						<input type="text" class="form-control" placeholder="Security Code" aria-describedby="basic-addon1">
					</div>
				</div>
			</div>
			<div class="row form_input" id="card_payment">
				<div class="col-md-12">
					<button type="button" class="btn btn-success">Payment</button>
				</div>
			</div>
			<div id="card_show"></div>
		</div>
	</div>
</body>
</html>